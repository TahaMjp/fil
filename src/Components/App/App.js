import React from "react";
import { useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

export let myContext = React.createContext();
const App = () => {
  const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

  const [topics, setTopics] = useState([]);
  const [images, setImages] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [lastFetch, setlastFetch] = useState(null);

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

  const HomepageImages = async () => {
    setlastFetch(() => HomepageImages);

    try {
      let data = await fetch(
        `https://api.unsplash.com/photos?per_page=30&page=${pageNum}&client_id=${key}`
      );
      let res = await data.json();
      const imagesData = res.map((elem) => ({
        url: elem.urls.regular,
        description: elem.description,
        creatorName: elem.user.name,
        creatorImage: elem.user.profile_image.large,
      }));
      setImages(imagesData);
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchSpecificTopic = async (SpecificTopic) => {
    setlastFetch(() => fetchSpecificTopic);

    try {
      await setImages([]);
      let data = await fetch(
        `https://api.unsplash.com/topics/${SpecificTopic}/photos?per_page=10&page=${pageNum}&client_id=${key}`
      );
      let res = await data.json();
      const imagesData = res.map((elem) => ({
        url: elem.urls.regular,
        description: elem.description,
        creatorName: elem.user.name,
        creatorImage: elem.user.profile_image.large,
      }));
      setImages(imagesData);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchTopics();
    HomepageImages();
  }, []);

  return (
    <myContext.Provider
      value={{
        topics,
        images,
        fetchSpecificTopic,
        pageNum,
        setPageNum,
        lastFetch,
      }}
    >
      <Wrapper />
    </myContext.Provider>
  );
};

export default App;
