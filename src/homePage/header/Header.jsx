import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import nofee from '../../images/nofee.gif';
import img2 from '../../images/img1.avif';
import img3 from '../../images/img2.avif';
import img1 from '../../images/img3.avif';
import img4 from '../../images/img4.webp';
import img5 from '../../images/img5.avif';
import styles from './Header.module.css';

const Header = () => {
  const images = [img1, img2, img3, img4, img5];
  
  return (
    <div className={styles.header}>
      <img className={styles.noFeeImage} src={nofee} alt="No fee" />
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval={index === 0 ? 10000 : 2000} // Customize intervals here
            >
              <img src={img} className="d-block w-100" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
