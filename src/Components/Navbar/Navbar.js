import Menubar from "../Menubar/Menubar";
import Searchbox from "../Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col p-2 gap-y-4 sticky top-0 z-50 bg-white">
      <Searchbox />
      <Menubar />
    </div>
  );
};

export default Navbar;
