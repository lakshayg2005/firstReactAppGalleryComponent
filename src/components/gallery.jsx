import './gallery.css';
import {useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
// faCircleChevronLeft,
// faCircleChevronRight,
// faCircleXmark}from '@fortawesome/free-solid-svg-icons'

const Gallery = ({galleryImages}) => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [openModal,SetopenModal]=useState(false);
    const handleOpenModal =(index)=>{
        SetopenModal(true);
        setSlideNumber(index);
    }
    const handleLeftModal=()=>{
     slideNumber===0?setSlideNumber(galleryImages.legnth-1):setSlideNumber(slideNumber-1)
    }
    const handleCloseModal=()=>{
        SetopenModal(false);
    }
    const handleRightModal=()=>{
        slideNumber===galleryImages.legnth?setSlideNumber(0):setSlideNumber(slideNumber+1)
    }
  return (
    <div>
        {
            openModal &&
            <div className="sliderWrap">
<button className="btnprev" onClick={handleLeftModal} > prev</button>
<button className="btnclose" onClick={handleCloseModal}>close</button>
<button className="btnnext" onClick={handleRightModal} >next</button>
<div className="fullScreenImage">
    <img src={galleryImages[slideNumber].img} alt=''/>
</div>

            </div>
        }
       
    <div className="gallerywrap"> 
    {
     galleryImages && galleryImages.map((slide,index)=>{
        return(
            <div className="single" key={index} onClick={()=>handleOpenModal(index)} >
             <img src={slide.img} alt=' '/>
            </div>
        )
     })

    }

    </div>
    
    </div>
  )
}

export default Gallery
