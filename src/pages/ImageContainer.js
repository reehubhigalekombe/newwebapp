import React from 'react'
import "../styles/imageContainer.css"
import Open from "../assests/kidq.jpg";
import Gamboots from "../assests/slip3.webp";
import Sneekers  from "../assests/men1.jpg";
import Rubber from "../assests/slip6.webp";
import timber from "../assests/slip01.webp";
import Slippers from "../assests/men3.jpg";
import Airforce from "../assests/men2.jpg";
import { Link } from 'react-router-dom';
const imageAnchor = [
    {url : Sneekers, link: "/men"},
    {url : Airforce, link: "/women"},
    {url : Open, links: "/kids"},
    {url : Gamboots, link: "/sport"},
    {url : Slippers, link: "/official"},
    {url : Rubber, link: "/sneakers"},
    {url : timber, link: "/slips"}
]
function ImageContainer() {
   
  return (
    <div className='imageHomes'>
      <div className='slidingImages'>
        {imageAnchor.map((image, index) => (
            <Link to={image.link} key={index}>
                <img src={image.url} alt={`Slide${index}`} />
            </Link>
        ))

        }
        {imageAnchor.map((image, index) =>(
            <Link to={image.link} key={`dup-${index}`}  >
            <img src={image.url} alt={`Slide${index}-duplicate`} />
            </Link>
        ) )  }
      </div>
    </div>
  )
}

export default ImageContainer
