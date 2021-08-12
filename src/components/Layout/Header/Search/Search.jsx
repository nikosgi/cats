import React, { useRef } from 'react';


import {createUseStyles} from 'react-jss'
import { useHistory, useLocation } from 'react-router';



const useStyles = createUseStyles({
  root: {
    color: 'green',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10
  },
  input: {
      height: 'calc(100% - 30px - 12px)',
      width: 300,
      borderRadius: 15,
      border: 0,
      padding: 15,
      '&:focus': {
          outline: 0
      },
      '@media (max-width: 770px)':{
        width: 150,
      },
      backgroundColor: '#f5f5f5'
  }
})


function Search(){

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const inputRef = useRef();

    const handleKeyPress = (e) => {
        if (e.which === 13 && inputRef.current.value !== "" && location.search !== "?t=" + inputRef.current.value){
            history.push('/search?q=' + inputRef.current.value)
        }
    }
    return (
        <div className={classes.root}>
             <input 
                ref={inputRef} 
                onKeyPress={handleKeyPress}
                className={classes.input}
                placeholder="Search breeds..."
            />
        </div>
    )
}

export default Search