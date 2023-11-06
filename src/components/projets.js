import React, { useState } from 'react';
import Modal from '../content/Modal'; 

import '../App.scss';


function Projets({  data, projetsData }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);

    document.body.classList.add('body-no-scroll');
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.classList.remove('body-no-scroll');
  };
  return (
    <>
    <section className="projetsContainer">
    <h1>{data?.infos_perso?.section_name?.projets}</h1>
      {projetsData && projetsData.projects.map((project, index) => (
        <div
          key={index}
          className="projet"
          style={{ backgroundImage: `url(${project.images[0]})`, backgroundSize: 'contain' }}
          onClick={() => openModal(project)}
        >
          <h2>{project.title}</h2>
          <p id="date">{project.startDate}</p>
        </div>
      ))}
    </section>
    {isModalOpen && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Projets;



