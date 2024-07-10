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


function SearchOrder () {
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
            <input placeholder="Search order #" value={query} onChange={(e) => {
                setQuery(e.target.value);
            }} />
        </form>

    );
}

export default SearchOrder;
