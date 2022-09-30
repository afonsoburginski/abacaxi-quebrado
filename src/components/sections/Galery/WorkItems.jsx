import React, { useState } from 'react';
import Modal from '../../elements/Modal';

const WorkItems = ({ item }) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }
/* 
  if (custDiv.style.display === "none") {
    custDiv.style.display = "flex";
  } else {
    custDiv.style.display = "none";
  } */

  return (
    <div className="work__card" key={item.id}>

      <a>
        { item.category === 'Video' ? (
          <video 
            src={item.src}
            data-video={item.src}
            alt="Video"
            href="#0"
            className="work__img"
            width={896}
            height={504}
            aria-controls="video-modal"
            onClick={openModal}
          />
        ) : (
          <img 
            src={item.src} 
            alt="" 
            className="work__img"
            onClick={openModal} 
          />
        )}
      </a>

      <Modal
        id="video-modal"
        show={videoModalActive}
        handleClose={closeModal}
        video={item.src}
        videoTag="iframe" 
      />

    </div>
  );
};

export default WorkItems;
