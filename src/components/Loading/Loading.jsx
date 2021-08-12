import React from 'react';

import logo from  '../../static/img/logo.svg';
import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({
  root: {
    animation: '$blink linear 2500ms infinite',
    opacity: 0,
  },
  img: {
      height: 51,
      width: 300
  },
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1}
  },
})


function Loading(props){

    const classes = useStyles();
    return (
        <div className={classes.root}>
             <img alt="Loading content" className={classes.img} src={logo}/>
        </div>
    )
}

export default Loading