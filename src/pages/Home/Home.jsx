import React, {useRef,  useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom'

import {createUseStyles} from 'react-jss'
import { CatService } from '../../utils/rest.js';

import Loading from '../../components/Loading/Loading.jsx';
import Card from '../../components/Card/Card.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';

import {throttle} from 'throttle-debounce';


const useStyles = createUseStyles({
  root: {
    padding: 25,
    backgroundColor: '#f5f5f5',
    height: 'calc(100vh - 140px)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
        backgroundColor: '#eaeaea',
    },
    '&::-webkit-scrollbar-thumb':{
    background: '#ababab',
    borderRadius: 2,
    },
    '@media (max-width: 770px)':{
        padding: '25px 10px',
    }
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    height: 'calc(100% - 50px)'
  },
  feedWrapper: {
    width: 1080,
    margin: '0 auto',
    '@media (max-width: 1130px)':{
        width: 720
    },
    '@media (max-width: 770px)':{
        width: '100%'
    }
  },
  feed: {
    float: 'left'
  },
  item: {
    margin: 30,
    float: 'left',
    '@media (max-width: 770px)':{
        margin: '20px 0',
        width: 'calc(100%)'
    }
  },
  spinner: {
      float: 'left',
      width: '100%',
      margin: '0 auto'
  }
})

const itemsPerRow = 6;

function Home(){
    const classes = useStyles();
    const history = useHistory();
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [end, setEnd] = useState(false);
    const [feed, setFeed] = useState([]);
    
    const homeRef = useRef(null);

    useEffect( () => {
        if (homeRef && homeRef.current){
            const debouncedScroll = throttle(500, onScroll);
            const ref = homeRef.current;
            ref.addEventListener( 'scroll', debouncedScroll);
            return () => {
                ref.removeEventListener( 'scroll', debouncedScroll);
            }
        }
    },[]);



    const fetchCats = (limit, offset) => {
        CatService({
            api: '/breeds?limit='+ limit +'&page=' + offset
        })
        .then( res => res.json())
        .then (res => {
            setFeed( (feed) => feed.concat(res))
            if (res.length < itemsPerRow){
                setEnd(true);
            }
        })
        .catch( err => 
            console.log(err)
        ).finally( () => {
            setFetching(false)
        })
    }
    
    useEffect( () => {
        if (!end) fetchCats(itemsPerRow,page);
    },[page,end])

    const onScroll = e => {
        const {scrollTop, scrollHeight, clientHeight} = e.target;
        if ( scrollTop > scrollHeight - clientHeight - 250){
            setPage( page => page + 1);            
        }
    }

    const handleClick = (item) => {
        history.push('/explore?breed_id=' + item.id)
    }

    return (
        <div ref={homeRef} className={classes.root}>
            { fetching 
                ?
                    <div className={classes.loading}>
                        <Loading/>
                    </div>
                :   
                    <>
                    <div className={classes.feedWrapper}>
                        {
                            feed.length > 0 && [...Array(page)].map( (_,row) => (
                                <div className={classes.feed} key={row}>
                                    {
                                    feed.slice(row*itemsPerRow,(row+1)*itemsPerRow).map( (item,index) => (
                                            <div key={item.id} className={classes.item}>
                                                <Card onClick={() => handleClick(item)} delay={index} url={item.image ? item.image.url : null} title={item.name} desc={item.description}/>
                                            </div>
                                        ))
                                    
                                    }
                                </div>
                            ))
                        }

                    </div>
                    { !end && 
                        <div className={classes.spinner}>
                            <Spinner/>
                        </div>
                    }   
                    </>
            } 

        </div>
    )
}

export default Home