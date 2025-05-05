import PageNext from "../PageNext/PageNext";
import PageNum from "../PageNum/PageNum";
import PagePrev from "../PagePrev/PagePrev";

const Pagination = () => {
  return (
    <div className="flex w-3/12 mx-auto p-3 justify-center gap-x-3 font-semibold font-mono mt-3">
      <PagePrev />
      <PageNum />
      <PageNext />
    </div>
  );
};

export default Pagination;
