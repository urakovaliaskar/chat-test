import React from "react";
import search from "../../../../assets/images/search-line.svg";
import edit from "../../../../assets/images/edit-box-line.svg";

const Search = () => {
	return (
		<div className="sidebar__search">
			<input type="search" />
			<img src={search} alt="search" className="sidebar__search__icon" />
			<img src={edit} alt="search" className="sidebar__search__edit" />
		</div>
	);
};

export default Search;
