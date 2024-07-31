import { IoMdSearch } from "react-icons/io";

const SearchField = ({ value, onChange }) => {
    const onSearchHandler = (event) => {
        onChange(event?.target.value);
    };

    return (
        <div className="search-bar text-center my-4">
            <input
                type="text"
                value={value}
                onChange={onSearchHandler}
                placeholder="Search products..."
                
            />

        </div>
    );
};
export default SearchField;
