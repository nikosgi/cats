import React  from 'react';

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    boxShadow: '1px 1px 6px 0px #a7a7a7',
    borderRadius: 5,
    width: 300,
    overflow: 'hidden',
    transition: 'transform linear 100ms',
    animation: '$appear linear 1000ms forwards',
    animationDelay: props => props.delay * 300,
    position: 'relative',
    top: 0,
    opacity: 0,
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '@media (max-width: 770px)':{
        width: '100%',
        borderRadius: 'unset',
        '&:hover': {
            transform: 'unset'
        }
    }
  },
  '@keyframes appear': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  '@keyframes position': {
    from: {top: -40},
    to: {top: 0}
  },
  imageWrapper: {
    height: 180,
    '@media (max-width: 770px)':{
        height: 350,
    }
  },
  image: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    '@media (max-width: 520px)':{
        objectFit: 'contain',
    }
  },
  body: {      
    padding: 25,
    '@media (max-width: 770px)':{
        padding: '25px 12px'
    }
  },
  text: {
    color: '#383838',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  descWrapper: {
    '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
        backgroundColor: '#eaeaea',
    },
    '&::-webkit-scrollbar-thumb':{
        background: '#ababab',
        borderRadius: 2,
    },
    overflowY:'auto',
    height: 140,
    marginTop: 15,
    '@media (max-width: 770px)':{
        height: 80
    }
  },
  desc: {
    fontSize: 14,
    color: '#383838',
    textAlign: 'justify',
    width: 'calc(100% - 8px)'
  },
  buttonWrapper: {
      marginTop: 15,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e8eaff',
      color: '#667497',
      cursor: 'pointer'
  }
})

function Card(props) {

    const classes = useStyles(props);
    const {url, desc, title, onClick} = props;

    const fallbackIMG = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big.png';

    return (
        <div data-testid="card" className={classes.root}>
            <div className={classes.imageWrapper}>
                <img data-testid="card-image" alt={title} className={classes.image} src={url || fallbackIMG}/>
            </div>
            <div className={classes.body}>
                <div className={classes.title}>
                    
                   <h3 className={classes.text}>{title}</h3>
                </div>
                <div className={classes.descWrapper}>
                  <p className={classes.desc}>{desc}</p>
                </div>
                <div data-testid="card-action" onClick={onClick} className={classes.buttonWrapper}>
                    {'Explore ->'}
                </div>
            </div>
        </div>
    )


}

export default Card