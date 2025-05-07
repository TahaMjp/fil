import { useContext, useRef } from "react";
import { myContext } from "../App/App";

const Searchinp = () => {
  const inputRef = useRef();

  let SearchAPI = useContext(myContext);
  return (
    <div className="lg:w-6/12 w-full flex gap-x-2">
      <input
        ref={inputRef}
        type="text"
        name="searchInp"
        id="searchInp"
        className="w-9/12 border-2 p-2 "
        placeholder="Search ..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            SearchAPI.fetchSearchedPhoto(inputRef.current.value);
          }
        }}
      />{" "}
      <button
        className="w-2/12 p-2 text-center border-2 hover:bg-black hover:text-white font-semibold"
        onClick={() => {
          SearchAPI.fetchSearchedPhoto(inputRef.current.value);
        }}
      >
        {" "}
        Search{" "}
      </button>{" "}
    </div>
  );
};

export default Searchinp;
