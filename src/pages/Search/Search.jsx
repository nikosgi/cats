import React, {useRef, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'

import {createUseStyles} from 'react-jss'
import { CatService } from '../../utils/rest.js';


import Spinner from '../../components/Spinner/Spinner.jsx';



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
  feedWrapper: {
    width: 650,
    margin: '0 auto',
    '@media (max-width: 1130px)':{
        width: 720
    },
    '@media (max-width: 770px)':{
        width: '100%'
    }
  },
  item: {
    padding: '30px 0',
    borderBottom: '1px solid #dadada',
    '@media (max-width: 770px)':{
        margin: '20px 0',
        width: 'calc(100%)'
    }
  },
  spinner: {
      float: 'left',
      width: '100%',
      margin: '0 auto'
  },
  link: {
    cursor: 'pointer',
    display: 'inline',
    '&:hover': {
        borderBottom: '2px solid #0b868b'
    }
  }
})


function Search(){
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [fetching, setFetching] = useState(true);
    const [breeds, setBreeds] = useState([]);
    
    const homeRef = useRef(null);


    useEffect( () => {
        const { search: query } = location;
        fetchCats(query)
    },[location])

    const fetchCats = (q) => {
        setFetching(true);
        CatService({
            api: '/breeds/search' + q
        })
        .then( res => res.json())
        .then (res => {
            setBreeds(res)
        })
        .catch( err => 
            console.log(err)
        ).finally( () => {
            setFetching(false)
        })
    }

    const handleClick = (id) => {
        history.push('/explore?breed_id=' + id)
    }

    return (
        <div ref={homeRef} className={classes.root}>
            { fetching 
                ?
                    <div className={classes.spinner}>
                        <Spinner/>
                    </div>
                :   
                    <div className={classes.feedWrapper}>
                        <h5 style={{color: '#333333'}}>{breeds.length} {breeds.length === 1 ? 'result' : 'results'} for '{location.search.substring(location.search.indexOf('?q=')+3)}'</h5><br/>
                        { breeds.map( breed => 
                            <div className={classes.item} key={breed.id}>
                                <h3 onClick={() => handleClick(breed.id)} className={breed.wikipedia_url ? classes.link : classes.disabled} style={{color: '#0b868b'}} >{breed.name}</h3><br/>
                                { breed.description && <h5 style={{color: '#333333', marginTop: 15}} align='justify'>{breed.description}</h5> }
                            </div>
                        )}
                    </div>
            
                    
            } 

        </div>
    )
}

export default Search