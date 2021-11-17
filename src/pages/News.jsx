import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    useEffect(() => {
        fetchPhotos()
    }, [])
    const [photos, setPhotos] = useState("");
    const fetchPhotos = async () => {
        const Photos = await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log(Photos.data)
        setPhotos(Photos.data)
    }
    return (
        <div className="container">
            <h3>Gallery</h3>
            {photos && photos.map((photo) =>
                <div className="col s4">
                    <div className="photoBox">
                        <div><img src={photo.url} /></div>
                        <button /*onClick={() => LikeCounter()}*/>LIKE</button>
                        <p>0</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default News;