export async function fetchBasicData() {
  try {
    const response = await fetch('/BasicData.json');
    if (!response.ok) {
      throw new Error('erreur');
    }
    const data = await response.json();
    return data;   
  } catch (error) {
    console.error('Error loading BasicData.json:', error);
    return null;
  }
}

export async function fetchDataLangFR() {
  try {
    const response = await fetch(`/dataLangFrancais.json`);
    if (!response.ok) {
      throw new Error(`erreur`);
    }
    const FrenchData = await response.json();
    return FrenchData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function fetchDataLangEN() {
  try {
    const response = await fetch(`/dataLangEnglish.json`);
    if (!response.ok) {
      throw new Error(`erreur`);
    }
    const EnglishData = await response.json();
    return EnglishData;
  } catch (error) {
    console.error(error);
    return null;
  }
}


