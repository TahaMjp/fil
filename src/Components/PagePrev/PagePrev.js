import { useContext } from "react";
import { myContext } from "../App/App";

const PagePrev = () => {
  let pageNumAPI = useContext(myContext);
  return (
    <button
      className="flex px-5 py-1 border-2 border-black hover:text-white hover:bg-black"
      onClick={() => {
        pageNumAPI.setPageNum((prev) => prev - 1);
        pageNumAPI.lastFetch(pageNumAPI.pageNum);
      }}
      disabled={pageNumAPI.pageNum === 1}
    >
      {" "}
      {"<"}{" "}
    </button>
  );
};

export default PagePrev;
