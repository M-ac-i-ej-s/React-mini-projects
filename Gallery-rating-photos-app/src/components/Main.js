import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import photosData from '../data/data.json';
import PhotosCard from './PhotosCard';
import '../style.css';

export default function App() {
  const [searchParams] = useSearchParams();
  const [photos, setPhotos] = useState([]);
  const id = +searchParams.get('id');

  useEffect(() => {
    setPhotos(photosData.data);
  }, []);

  const handleRate = (rate) => {
    console.log(rate);
    if (rate === undefined) {
      return '';
    }
    if (rate === 'reset') {
      setPhotos(
        photos.map((obj) => {
          if (obj.id == id) {
            const newObj = {
              id: obj.id,
              rating: photosData.data[id].rating,
              link: obj.link,
              name: obj.name,
              surname: obj.surname,
              nickname: obj.nickname,
              date: obj.date,
              description: obj.description,
            };
            console.log(newObj);
            return newObj;
          } else {
            return obj;
          }
        })
      );
    } else {
      setPhotos(
        photos.map((obj) => {
          if (obj.id == id) {
            const newObj = {
              id: obj.id,
              rating: [...obj.rating, rate],
              link: obj.link,
              name: obj.name,
              surname: obj.surname,
              nickname: obj.nickname,
              date: obj.date,
              description: obj.description,
            };
            console.log(newObj);
            return newObj;
          } else {
            return obj;
          }
        })
      );
    }
  };

  return (
    <div>
      <PhotosCard handleRate={handleRate} {...photos[id]} />
      <div className="swipe__box">
        <div>
          {id !== 0 ? (
            <Link className="link__p" to={'/photo?id=' + (+id - 1)}>
              &#x3c;
            </Link>
          ) : (
            ''
          )}
          {id !== photos.length - 1 ? (
            <Link className="link__p" to={'/photo?id=' + (+id + 1)}>
              &#x3e;
            </Link>
          ) : (
            ''
          )}
        </div>
        <Link className="link__det" to={'/photo/details?id=' + id}>
          details
        </Link>
      </div>
    </div>
  );
}
