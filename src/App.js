import { useState ,useEffect} from 'react';
import './App.css';
import Gallery from "./components/gallery";

function App() {

 const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.photo.url; // Assuming data structure matches
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    const fetchGalleryData = async () => {
      const urls = [
        'https://api.slingacademy.com/v1/sample-data/photos/1',
        'https://api.slingacademy.com/v1/sample-data/photos/2',
        'https://api.slingacademy.com/v1/sample-data/photos/3',
        'https://api.slingacademy.com/v1/sample-data/photos/4',
        'https://api.slingacademy.com/v1/sample-data/photos/5',
        'https://api.slingacademy.com/v1/sample-data/photos/6',
        'https://api.slingacademy.com/v1/sample-data/photos/7',
        'https://api.slingacademy.com/v1/sample-data/photos/8',
        'https://api.slingacademy.com/v1/sample-data/photos/9',
        'https://api.slingacademy.com/v1/sample-data/photos/10',
        'https://api.slingacademy.com/v1/sample-data/photos/11',
        'https://api.slingacademy.com/v1/sample-data/photos/12',
        'https://api.slingacademy.com/v1/sample-data/photos/13',
        'https://api.slingacademy.com/v1/sample-data/photos/14',
        'https://api.slingacademy.com/v1/sample-data/photos/15',
        'https://api.slingacademy.com/v1/sample-data/photos/16',
        'https://api.slingacademy.com/v1/sample-data/photos/17',
        'https://api.slingacademy.com/v1/sample-data/photos/18',
        'https://api.slingacademy.com/v1/sample-data/photos/19',
        'https://api.slingacademy.com/v1/sample-data/photos/20',
      ];

      const imageDataPromises = urls.map(async (url) => {
        const imageUrl = await fetchData(url);
        return { img: imageUrl };
      });

      const imageData = await Promise.all(imageDataPromises);
      setGalleryImages(imageData);
    };

    fetchGalleryData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
  <div className="App">
  <Gallery galleryImages={galleryImages}/>
  </div>
  );
}

export default App;












// import {useState,useEffect} from "react";




// const[urlofimage,seturlofimage]=useState("");
// const[titleofimage,settitleofimage]=useState("");
// const[descriptionofimage,setdescriptionofimage]=useState("");
// const[userofimage,setuserofimage]=useState("");
// const fetchData = async (url) => {
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data);
//   seturlofimage(data.photo.url);
//   settitleofimage(data.photo.title);
//   setdescriptionofimage(data.photo.description);
//   setuserofimage(data.photo.user);
//  }
//  const URL = 'https://api.slingacademy.com/v1/sample-data/photos/1'
// useEffect(()=>{
// fetchData(URL);
// },[]);



{/* <button on click={()=>{fetchData(URL)}}>Generate Random images</button>
  <pre>
    <img src={urlofimage} alt="not available"/>
    <br/>
    {titleofimage}
    <br/>
    {descriptionofimage}
 <br/>
    {userofimage}
  </pre> */}