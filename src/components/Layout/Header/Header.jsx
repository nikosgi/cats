import React,{useEffect, useState} from 'react';


import {useLocation, useHistory} from 'react-router-dom';

import {createUseStyles} from 'react-jss'

import Search from './Search/Search';


const useStyles = createUseStyles({
  root: {
    color: '#f5f5f5',
    backgroundColor: '#010101',
    height: 45,
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  button: {
    height: 45,
    width: 45,
    fontSize: 34,
    marginLeft: 15,
    cursor: 'pointer'
  }
})


function Header(props){

    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [renderArrow, setRenderArrow] = useState(false);

    useEffect( () => {
      setRenderArrow(location.pathname !== "/")
      
    },[location.pathname, location.search])

    const handleBack = () => history.goBack()

    return (
        <header className={classes.root}>
            <div>
              {renderArrow && 
                <div onClick={handleBack} className={classes.button}>{'<-'}</div>
              }
            </div>

            <Search/>
        </header>
    )
}

export default Header