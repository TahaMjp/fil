import Getimage from "../Getimage/Getimage";
import Pagination from "../Pagination/Pagination";

const Imageplace = () => {
  return (
    <div className="w-8/12 flex flex-col">
      <div className="w-full columns-3 gap-3 ">
        <Getimage />
      </div>{" "}
      <Pagination />{" "}
    </div>
  );
};

export default Imageplace;
