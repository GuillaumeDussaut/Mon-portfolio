import React, { useState } from 'react';
import '../App.scss';

function Modal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="Titre">
          <h2><a href={project.url} target='blank'>{project.title}</a></h2>
          <p id="date">{project.startDate}</p>
        </div>
        <div className="slider">
          <div className="slider-container">
            <img src={project.images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <button className="prev" onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
          </div>
          <div className="pagination">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={index === currentImageIndex ? 'active' : ''}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="descriptionProjet">
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
            <i key={index} className={`icon ${tech.class}`} ></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

