import { useContext } from "react";
import { myContext } from "../App/App";

const Topics = () => {
  let topicAPI = useContext(myContext);
  return (
    <>
      {" "}
      {topicAPI["topics"].map((Element, index) => {
        return (
          <button
            className="p-2 border-2 text-center hover:bg-black hover:text-white font-semibold"
            key={index}
            onClick={() => {
              topicAPI.fetchSpecificTopic(Element);
            }}
          >
            {" "}
            {Element}{" "}
          </button>
        );
      })}{" "}
    </>
  );
};

export default Topics;
