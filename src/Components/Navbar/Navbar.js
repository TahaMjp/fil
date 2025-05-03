import Menubar from "../Menubar/Menubar";
import Searchbox from "../Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col p-2 gap-y-4">
      <Searchbox />
      <Menubar />
    </div>
  );
};

export default Navbar;
