import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateQuery = (query) => {
  const regex = /[ ? = \/]/g;
  // Alternative syntax using RegExp constructor
  // const regex = new RegExp('[\\\/ ? =]', 'gm')

  let m = regex.exec(query);

  if (m === null) {
    return true;
  }

  return false;
};

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    if (!validateQuery(query)) {
      return;
    }

    navigate("/order/" + query);
    setQuery("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
