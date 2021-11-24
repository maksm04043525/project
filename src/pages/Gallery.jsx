import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  useEffect(() => {
    fetchPhotos()
  }, [])
  const [photos, setPhotos] = useState("");
  const [filter, setFilter] = useState(null);

  const like = (id) => {

    setPhotos(photos.map((photo)=> photo.id == id ? {...photo,like:1} : photo))

  }
  
  const fetchPhotos = async () => {
    const Photos = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    setPhotos(Photos.data.map((photo) => ({...photo,like:0} )))
  }
 console.log(photos)

  const deletePhoto = (id, i) => {
    const confirm = window.confirm("это точно нужно удалить?")
    if (confirm) {
      setPhotos(photos.filter((photos) => photos.id !== id))

    }
  }

  return (
    <div className="container">
      <h3>Gallery</h3>
      <div className="row">
        {photos && photos.map((photo, i) =>
          <div className="col s4">
            <div className="photoBox">
              <div className="photoImg">
                <img src={photo.url} key={photo.id} />
              </div>
              <div className="photoInfo">
                <div className="buttonLike">
                  <i className="material-icons prefix"
                    onClick={() => like(photo.id)}>
                    thumb_up
                  </i>
                </div>
                <div className="likeCounter" >
                  <p>{photo.like}</p>
                </div>
                <div>
                  <button onClick={() => deletePhoto(photo.id,i)}>Удалить</button>
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
