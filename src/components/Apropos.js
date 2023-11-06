import React, { useRef, useEffect } from 'react';
import profilIMG from '../assets/myProfile.jpg';
import '../App.scss';


export default function Apropos({ data }) { 
  const cardRef = useRef(null);

  useEffect(() => {
    const $card = cardRef.current;
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      $card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    function handleMouseEnter() {
      bounds = $card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    }

    function handleMouseLeave() {
      document.removeEventListener('mousemove', rotateToMouse);
      $card.style.transform = '';
      $card.style.background = '';
    }

    if ($card) {
      $card.addEventListener('mouseenter', handleMouseEnter);
      $card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        $card.removeEventListener('mouseenter', handleMouseEnter);
        $card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);
  return (
      <section className="a-propos-container">
        <h1 id="APropos">{data?.infos_perso?.section_name?.about}</h1>
        <div className="photoProfil" ref={cardRef}>
          <img src={profilIMG} alt="profil img" />
          <div className="glow" />
        </div>
        <div className="presentation">
          <div className="barre-top">
            <div className="btn-1"></div>
            <div className="btn-2"></div>
            <div className="btn-3"></div>
          </div>
          <div className="zone-texte">
            {data && (
              <>
                <h4>{data.infos_perso.descriptionTitre}</h4>
                <p>{data.infos_perso.description}</p>
              </>
            )}
          </div>
        </div>
      </section>
  );
}


