
import React from 'react';

import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({
  spinner: {
    fontSize: '10px',
    margin: '25px auto',
    textIndent: '-9999em',
    width: '5em',
    height: '5em',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #0b868b 1%, rgba(255,255,255, 0) 53%)',
    position: 'relative',
    animation: '$load linear 1000ms infinite',
    transform: 'translateZ(0)',
    '&:before': {
        width: '50%',
        height: '50%',
        borderRadius: '100% 0 0 0',
        position: 'absolute',
        top: '0',
        left: '0',
        content: '""' 
    },
    '&:after': {
        background: '#f5f5f5',
        width: '75%',
        height: '75%',
        borderRadius: '50%',
        content: '""',
        margin: 'auto',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0'
    }
  },
  '@keyframes load' :{
    '0%': {
        '-webkit-transform': 'rotate(0deg)',
        transform: 'rotate(0deg)'
      },
    '100%': {
        '-webkit-transform': 'rotate(360deg)',
        transform: 'rotate(360deg)'
      }
  },
})


function Spinner(){
    const classes = useStyles();
    return (
        <div className={classes.spinner}/>
    )
}

export default Spinner


  