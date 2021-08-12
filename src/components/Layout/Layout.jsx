import React from 'react';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';


import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    root: {
      backgroundColor: '#f5f5f5',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  })


function Layout({children, ...props}){

    const classes = useStyles();
    
    return (
        <main className={classes.root}>
            <Header/>
            { children }
            <Footer/>
        </main>
    )


}

export default Layout