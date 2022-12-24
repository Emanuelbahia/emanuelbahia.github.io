import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from "../../assets/images/aaron-burden-ufFIweqSPd4-unsplash.jpg" 
import image1 from "../../assets/images/free-walking-tour-salzburg-7mAVe4zT45k-unsplash.jpg"
import image2 from "../../assets/images/koukichi-takahashi-fZdX9BW8WDs-unsplash.jpg"
import image3 from "../../assets/images/mike-swigunski-6SgLJg7kM7E-unsplash.jpg"
import image4 from "../../assets/images/mike-swigunski-a_DGqJ5jLZQ-unsplash.jpg"
import image5 from "../../assets/images/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg"
import image6 from "../../assets/images/milan-seitler-b4_CoS6_tXE-unsplash.jpg"
import image7 from "../../assets/images/rj-baculo-P6lsvPvBEIM-unsplash.jpg"
import image8 from "../../assets/images/vivek-kumar-7k1IKQZikSc-unsplash.jpg"
import "./header.css"
import SomeHotels from '../someHotels/SomeHotels';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


 
 
 

function Header() {
  const classes = useStyles();

  const itemData = [
    {
      img: image,
      title: 'Lake',
      author: 'author',
    },
    {
    img: image1,
    title: 'Hallstat',
    author: 'author1',
    },
    {
      img: image2,
      title: 'Tokyo',
      author: 'author2',
    },
    {
      img: image3,
      title: 'Georgia',
      author: 'autho3r',
    },
    {
      img: image4,
      title: 'Boracay',
      author: 'author4',
    },
    {
      img: image5,
      title: 'Maldivas',
      author: 'author5',
    },
    {
      img: image6,
      title: 'wood',
      author: 'author6',
    },
    {
      img: image7,
      title: 'Filipinas',
      author: 'author7',
    },
    {
      img: image8,
      title: 'India',
      author: 'author8',
    },
    

    
  ];

  return (
    <>
    <div className='positionRelative'>
    <div className={classes.root}  >
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem style={{ height: "300px", width: "30%"  }} key={item.img}>
            <img  src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  {/* <StarBorderIcon className={classes.title} /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div >
    <SomeHotels />
    </>
  );

   
}

export default Header;




