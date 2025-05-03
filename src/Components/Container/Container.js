import Filtersplace from "../Filtersplace/Filtersplace";
import Imageplace from "../Imageplace/Imageplace";

const Container = () => {
  return (
    <div className="w-full p-2 bg-red-400 flex mt-4 justify-between">
      <Imageplace />
      <Filtersplace />
    </div>
  );
};

export default Container;
