import { useContext } from "react";
import { myContext } from "../App/App";

const Getimage = () => {
  let imagesAPI = useContext(myContext);

  return (
    <>
      {" "}
      {imagesAPI["images"].map((Element, index) => {
        return (
          <div className="w-4/12 bg-violet-400  h-fit" key={index}>
            {" "}
            <img src={Element} alt="" />{" "}
          </div>
        );
      })}{" "}
    </>
  );
};

export default Getimage;
