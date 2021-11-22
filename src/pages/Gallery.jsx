import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    useEffect(() => {
        fetchPhotos()
    }, [])
    const [photos, setPhotos] = useState("");
    const [likes, setLikes]=useState(0);


    const like = (id)=>{

          setLikes(likes+1)

    }

    const fetchPhotos = async () => {
        const Photos = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        setPhotos(Photos.data)
    }
    return (
        <div className="container">
            <h3>Gallery</h3>
              <div className="row">
            {photos && photos.map((photo) =>
                <div className="col s4">
                    <div className="photoBox">
                        <div className="photoImg">
                          <img src={photo.url} key={photo.id}/>
                        </div>
                        <div className="photoInfo">
                          <div className="buttonLike">
                              <i className="material-icons prefix"
                              onClick={()=>like(photo.id)}>
                                thumb_up
                              </i>
                          </div>
                          <div className="likeCounter" >
                            <p>{likes}</p>
                          </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Gallery;
