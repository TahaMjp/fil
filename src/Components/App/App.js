import React from "react";
import { useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

export let myContext = React.createContext();
const App = () => {
  const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

  const [topics, setTopics] = useState([]);
  const [images, setImages] = useState([]);

  const fetchTopics = async () => {
    try {
      let data = await fetch(
        `https://api.unsplash.com/topics/?client_id=${key}`
      );
      let res = await data.json();
      const slugs = res.map((elem) => elem.slug);
      setTopics(slugs);
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchImages = async () => {
    try {
      let data = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}`
      );
      let res = await data.json();
      const urls = res.map((elem) => elem.urls.regular);
      setImages(urls);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchTopics();
    fetchImages();
  }, []);

  return (
    <myContext.Provider value={{ topics, images }}>
      <Wrapper />
    </myContext.Provider>
  );
};

export default App;
