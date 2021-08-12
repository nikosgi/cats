import React, {useEffect,  useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom'

import {createUseStyles} from 'react-jss'
import { CatService } from '../../utils/rest.js';

import Loading from '../../components/Loading/Loading.jsx';


const useStyles = createUseStyles({
  root: {
    backgroundColor: '#f5f5f5',
    height: 'calc(100vh - 90px)',
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
        padding: 0,
    }
  },
  iframe: {
    height : "calc(100% - 4px)" ,
    width : "100%"  ,
    '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
        backgroundColor: '#eaeaea',
      },
      '&::-webkit-scrollbar-thumb':{
        background: '#ababab',
        borderRadius: 2,
      },
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    height: 'calc(100% - 50px)'
  },

})


function Explore(){
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [url, setUrl] = useState(null);
    const [fetching,setFetching] = useState(true);

    useEffect( () => {
        CatService({
            api: '/images/search' + location.search
        })
        .then( res => res.json())
        .then (res => {
            if (res && res.length > 0 && res[0].breeds && res[0].breeds.length>0)
                setUrl(res[0].breeds[0].wikipedia_url)
            else
                history.replace('/')
        })
        .catch( err => 
            console.log(err)
        ).finally( () => {
            setFetching(false)
        })
        return () => {}
    },[location,history])
    

    return (
        <div className={classes.root}>
            { fetching
                 ? 
                    <div className={classes.loading}>
                        <Loading/>
                    </div>
                :
                    <iframe title="Wiki" className={classes.iframe} src={url} frameBorder="0" />
            }
         
        </div>
    )
}

export default Explore