import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
/* import image from "../../assets/images/aaron-burden-ufFIweqSPd4-unsplash.jpg" 
import image1 from "../../assets/images/free-walking-tour-salzburg-7mAVe4zT45k-unsplash.jpg"
import image2 from "../../assets/images/koukichi-takahashi-fZdX9BW8WDs-unsplash.jpg"
import image3 from "../../assets/images/mike-swigunski-6SgLJg7kM7E-unsplash.jpg"
import image4 from "../../assets/images/mike-swigunski-a_DGqJ5jLZQ-unsplash.jpg"
import image5 from "../../assets/images/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg"
import image6 from "../../assets/images/milan-seitler-b4_CoS6_tXE-unsplash.jpg"
import image7 from "../../assets/images/rj-baculo-P6lsvPvBEIM-unsplash.jpg"
import image8 from "../../assets/images/vivek-kumar-7k1IKQZikSc-unsplash.jpg" */
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
      img: "https://fotos.hoteles.net/articulos/playa-barceloneta-barcelona-3153-1.jpg",
      title: 'barcelona',
      author: 'author',
    },
    {
    img: "https://ipparaguay.com.py/wp-content/uploads/2022/10/Islas-Maldivas-donde-queda.jpg",
    title: 'Isla maldivas',
    author: 'author1',
    },
    {
      img: " https://www.orangesmile.com/extreme/img/w600/copacabana-beach_1.jpg",
      title: 'Rio de janeiro',
      author: 'author2',
    },
    {
      img: "https://101lugaresincreibles.com/wp-content/uploads/2021/01/razones-visitar-edimburgo.jpg",
      title: 'Edimburgo',
      author: 'autho3r',
    },
    {
      img: "https://historia.nationalgeographic.com.es/medio/2020/04/24/foro-romano_d37dd909_1200x630.jpg",
      title: 'Roma',
      author: 'author4',
    },
    {
      img:  "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/e92d2f61-68b1-4977-ade9-e7bad78bd637.jpeg?im_w=720",
      title: 'Londres',
      author: 'author5',
    },
    {
      img: "https://a0.muscache.com/im/pictures/bfb3bdd5-22a6-4d02-8369-21d56660f34b.jpg?im_w=720",
      title: 'Paris',
      author: 'author6',
    },
    {
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/a7799717-0751-4b7c-a6f1-59baff77a2ff.jpeg?im_w=720",
      title: 'Australia',
      author: 'author7',
    },
    {
      img: "https://i0.wp.com/moovemag.com/wp-content/uploads/2019/05/maldivas-caba%C3%B1a-en-el-mar.jpg?fit=700%2C525&ssl=1",
      title: 'Brasil',
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




