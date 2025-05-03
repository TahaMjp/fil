import Githubsup from "../Githubsup/Githubsup";
import Searchinp from "../Searchinp/Searchinp";
const Searchbox = () => {
  return (
    <div className="w-full flex tracking-widest relative">
      <Searchinp />
      <Githubsup />
    </div>
  );
};

export default Searchbox;
