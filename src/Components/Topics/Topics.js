import { useContext } from "react";
import { topicContext } from "../App/App";

const Topics = () => {
  let topicAPI = useContext(topicContext);

  return (
    <>
      {" "}
      {topicAPI.map((Element, index) => {
        return (
          <button
            className="p-2 border-2 text-center hover:bg-black hover:text-white font-semibold"
            key={index}
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
