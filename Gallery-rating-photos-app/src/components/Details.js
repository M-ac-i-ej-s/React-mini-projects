import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import photosData from '../data/data.json';
import '../style.css';

export default function App() {
  const [searchParams] = useSearchParams();
  const [photos, setPhotos] = useState([]);
  const id = +searchParams.get('id');

  useEffect(() => {
    setPhotos(photosData.data[id]);
  }, []);

  return (
    <div className="details__span">
      <span>comment: {photos.description}</span>
      <Link className="link__det" to={'/photo?id=' + id}>
        Back to photo
      </Link>
    </div>
  );
}
