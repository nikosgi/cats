import React from 'react';


import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({
  root: {
    color: '#fefefe',
    backgroundColor: '#0b868b',
    minHeight: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0px 15px',
    fontSize: 15
  },
})


function Footer(props){

    const classes = useStyles();
    return (
        <footer className={classes.root}>
             <h4 text-align='end'><i>Nikos Gerontakis</i></h4>
        </footer>
    )
}

export default Footer