import React from "react";
import { useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

export let topicContext = React.createContext();

const App = () => {
  const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    try {
      let data = await fetch(
        `https://api.unsplash.com/topics/?client_id=${key}`
      );
      let res = await data.json();
      // res is an array of topic objects, map to extract slugs
      const slugs = res.map((elem) => elem.slug);
      setTopics(slugs);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <topicContext.Provider value={topics}>
      <Wrapper />
    </topicContext.Provider>
  );
};

export default App;
