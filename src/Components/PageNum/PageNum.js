import { useContext } from "react";
import { myContext } from "../App/App";

const PageNum = () => {
  let pageNumAPI = useContext(myContext);
  return (
    <div className="flex px-5 py-1 border-2 border-black hover:text-white hover:bg-black">
      {" "}
      {pageNumAPI.pageNum}{" "}
    </div>
  );
};

export default PageNum;
