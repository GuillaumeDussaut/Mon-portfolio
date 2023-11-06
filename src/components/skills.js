import React, { useState, useEffect } from "react";
import { fetchBasicData } from "../data/DataProvider"; 

import '../App.scss';

export default function Skills({data}) {
  const [skills, setSkills] = useState([]); 
  useEffect(() => {
    async function fetchSkillsData() {
      const basicData = await fetchBasicData();
      if (basicData && basicData.skills && basicData.skills.icons) {
        setSkills(basicData.skills.icons);
      }
    }
    fetchSkillsData();
  }, []);

  return (
      <section className="skillsContainer">
        <h1>{data?.infos_perso?.section_name?.competences}</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skillItem">
                <i className={skill.class}></i>
                <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </section>
  );
}