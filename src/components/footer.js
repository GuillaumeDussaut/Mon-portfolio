import React from "react";
import '../App.scss';

export default function Footer({ data }) {
  const socialInfo = data?.basicInfo?.social;

  return (
    <footer>
      {socialInfo && socialInfo.map((item, index) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
          <i className={item.class}></i>
        </a>
      ))}
    </footer>
  );
}



