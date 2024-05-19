import React, { useState, useEffect } from 'react';
import golfinho from '../paginas/Pictures/golfinho.jpg';
import caudaBaleia from '../paginas/Pictures/cauda baleia.jpg';
import baleia2 from '../paginas/Pictures/baleia2.jpg';
import tubaraoBaleia2 from '../paginas/Pictures/tubarao_baleia2.jpg';
import coralPeixes from '../paginas/Pictures/coral_peixes.jpg';
import blueOcean from '../paginas/Pictures/Blue.Ocean.jpeg';
import tartarugaFilhote from '../paginas/Pictures/tartaruga filhote.jpg';
import polvo from '../paginas/Pictures/polvo.jpg';
import tubaraoBaleia from '../paginas/Pictures/tubarao baleia.jpg';



export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 9; 


  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    showImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(prevIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 2600);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div id="main">
      <section id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
          <img src={golfinho} className="d-block w-100" alt="#" />

          </div>
  <img src={caudaBaleia} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
  <img src={baleia2} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 3 ? 'active' : ''}`}>
  <img src={tubaraoBaleia2} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 4 ? 'active' : ''}`}>
  <img src={coralPeixes} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 5 ? 'active' : ''}`}>
  <img src={blueOcean} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 6 ? 'active' : ''}`}>
  <img src={tartarugaFilhote} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 7 ? 'active' : ''}`}>
  <img src={polvo} className="d-block w-100" alt="#" />
</div>
<div className={`carousel-item ${currentIndex === 8 ? 'active' : ''}`}>
  <img src={tubaraoBaleia} className="d-block w-100" alt="#" />
</div>
        <button className="carousel-control-prev" type="button" onClick={prevImage} data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextImage} data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </div>
  );
}
