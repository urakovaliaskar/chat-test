import React from "react";
import searchImage from "../../../../assets/images/search-line.svg";
import edit from "../../../../assets/images/edit-box-line.svg";

const Search = ({onSearch, search}) => {
	return (
		<div className="sidebar__search">
			<input type="search" value={search} onChange={onSearch} />
			<img src={searchImage} alt="search" className="sidebar__search__icon" />
			<img src={edit} alt="edit" className="sidebar__search__edit" />
		</div>
	);
};

export default Search;
