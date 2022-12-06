import React, { useState, useEffect } from 'react';
import '../style.css';

export default function App({
  id,
  name,
  surname,
  nickname,
  link,
  rating,
  date,
  handleRate,
}) {
  const [starsColor, setStarsColor] = useState({
    first: '#ffffff',
    second: '#ffffff',
    third: '#ffffff',
    fourth: '#ffffff',
    fifth: '#ffffff',
  });

  const [clicked, setClicked] = useState(false);
  const [newRate, setNewRate] = useState([]);

  useEffect(() => {
    setNewRate(rating);
  }, [id]);

  const mediumFun = (arr) => {
    if (arr === undefined) {
      mediumFun(newRate);
    }
    const medium =
      arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length;
    return `${medium}`;
  };

  useEffect(() => {
    setStarsColor({
      first: '#ffffff',
      second: '#ffffff',
      third: '#ffffff',
      fourth: '#ffffff',
      fifth: '#ffffff',
    });
    setClicked(false);
  }, [id]);

  const setColor = (e) => {
    if (e.type === 'mouseleave' && !clicked) {
      setStarsColor({
        first: '#ffffff',
        second: '#ffffff',
        third: '#ffffff',
        fourth: '#ffffff',
        fifth: '#ffffff',
      });
      return;
    }
    if (e.target.id === 'first' && !clicked) {
      setStarsColor({
        first: '#fc0',
        second: '#ffffff',
        third: '#ffffff',
        fourth: '#ffffff',
        fifth: '#ffffff',
      });
      if (e.type === 'click') {
        setNewRate([...rating, 1]);
        handleRate(1);
      }
    } else if (e.target.id === 'second' && !clicked) {
      setStarsColor({
        first: '#fc0',
        second: '#fc0',
        third: '#ffffff',
        fourth: '#ffffff',
        fifth: '#ffffff',
      });
      if (e.type === 'click') {
        setNewRate([...rating, 2]);
        handleRate(2);
      }
    } else if (e.target.id === 'third' && !clicked) {
      setStarsColor({
        first: '#fc0',
        second: '#fc0',
        third: '#fc0',
        fourth: '#ffffff',
        fifth: '#ffffff',
      });
      if (e.type === 'click') {
        setNewRate([...rating, 3]);
        handleRate(3);
      }
    } else if (e.target.id === 'fourth' && !clicked) {
      setStarsColor({
        first: '#fc0',
        second: '#fc0',
        third: '#fc0',
        fourth: '#fc0',
        fifth: '#ffffff',
      });
      if (e.type === 'click') {
        setNewRate([...rating, 4]);
        handleRate(4);
      }
    } else if (e.target.id === 'fifth' && !clicked) {
      setStarsColor({
        first: '#fc0',
        second: '#fc0',
        third: '#fc0',
        fourth: '#fc0',
        fifth: '#fc0',
      });
      if (e.type === 'click') {
        setNewRate([...rating, 5]);
        handleRate(5);
      }
    }
    if (e.type === 'click') {
      setClicked(true);
    }
  };

  const reset = () => {
    setStarsColor({
      first: '#ffffff',
      second: '#ffffff',
      third: '#ffffff',
      fourth: '#ffffff',
      fifth: '#ffffff',
    });
    setClicked(false);
    setNewRate(rating.slice(0, 1));
    handleRate('reset');
  };

  return (
    <div className="photo__box">
      <img src={link} alt="" />
      <span className="rate">
        <i
          id="first"
          onMouseEnter={setColor}
          onMouseLeave={setColor}
          onClick={setColor}
          style={{ color: starsColor.first }}
        >
          ★
        </i>
        <i
          id="second"
          onClick={setColor}
          onMouseEnter={setColor}
          onMouseLeave={setColor}
          style={{ color: starsColor.second }}
        >
          ★
        </i>
        <i
          id="third"
          onClick={setColor}
          onMouseEnter={setColor}
          onMouseLeave={setColor}
          style={{ color: starsColor.third }}
        >
          ★
        </i>
        <i
          id="fourth"
          onClick={setColor}
          onMouseEnter={setColor}
          onMouseLeave={setColor}
          style={{ color: starsColor.fourth }}
        >
          ★
        </i>
        <i
          id="fifth"
          onClick={setColor}
          onMouseEnter={setColor}
          onMouseLeave={setColor}
          style={{ color: starsColor.fifth }}
        >
          ★
        </i>
      </span>
      <span className="rateNum__span">
        {newRate === undefined ? mediumFun(rating) : mediumFun(newRate)}
      </span>
      <button className="btn btn-secondary" onClick={reset}>
        reset rating
      </button>
      <div className="author__box">
        <span>{name}</span>
        <span> &apos;{nickname}&apos; </span>
        <span>{surname}</span>
      </div>
      <span className="author__box">{date}</span>
    </div>
  );
}
