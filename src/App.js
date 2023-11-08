import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Apropos from "./components/Apropos";
import Projets from "./components/projets";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Experience from "./components/experience";
import {
  fetchBasicData,
  fetchDataLangFR,
  fetchDataLangEN,
} from "./data/DataProvider.js";
import { useLanguage } from "./data/LanguageContext"; 


function App() {
  const { currentLang, changeLanguage } = useLanguage(); 

  const [data, setData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [projetsData, setProjetsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const basicData = await fetchBasicData();
      const langData =
        currentLang === "Francais"
          ? await fetchDataLangFR()
          : await fetchDataLangEN();

      setData(basicData);
      setLangData(langData);

      const projetsDataResponse = await fetch(
        currentLang === "Francais" ? "/dataLangFrancais.json" : "/dataLangEnglish.json"
      );

      if (projetsDataResponse.ok) {
        const projetsData = await projetsDataResponse.json();
        setProjetsData(projetsData);
      } else {
        console.error("Erreur lors du chargement des données Projets :", projetsDataResponse);
      }
    }

    fetchData();
  }, [currentLang]);

  return (
    <div className="App">
      <Header data={data} langData={langData} changeLanguage={changeLanguage} />
      <Apropos data={langData} />
      <Projets projetsData={projetsData} data={langData}/>
      <Skills data={langData}/>
      <Experience data={langData}/>
      <Footer data={data}/>
    </div>
  );
}

export default App;

