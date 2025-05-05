import { useContext } from "react";
import { myContext } from "../App/App";

const Getimage = () => {
  let imagesAPI = useContext(myContext);

  return (
    <>
      {" "}
      {imagesAPI["images"].map((Element, index) => {
        return (
          <div className="break-inside-avoid mb-3 relative group" key={index}>
            <a href={Element.url}>
              <div className="flex h-full justify-center w-full flex-col items-center gap-y-4 absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                {" "}
                <img
                  src={Element.creatorImage}
                  alt={Element.description}
                  className="w-4/12 rounded-full"
                />
                <p className="tracking-wider"> {Element.creatorName} </p>{" "}
              </div>{" "}
              <div className="group-hover:opacity-70 bg-black opacity-0 absolute w-full h-full">
                {" "}
              </div>{" "}
              <img src={Element.url} alt="" className="w-full" />{" "}
            </a>{" "}
          </div>
        );
      })}{" "}
    </>
  );
};

export default Getimage;
