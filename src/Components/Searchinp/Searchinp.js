const Searchinp = () => {
  return (
    <div className="lg:w-6/12 w-full flex gap-x-2">
      <input
        type="text"
        name="searchInp"
        id="searchInp"
        className="w-9/12 border-2 p-2 "
        placeholder="Search ..."
      />
      <button className="w-2/12 p-2 text-center border-2 hover:bg-black hover:text-white font-semibold">
        {" "}
        Search{" "}
      </button>{" "}
    </div>
  );
};

export default Searchinp;
