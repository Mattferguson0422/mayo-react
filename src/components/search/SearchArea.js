import React from "react";
import {SearchFilters} from "./SearchFilters";
import {SearchResults} from "./SearchResults";

export const SearchArea = () => {
	return (
		<div className="search-area">
			<SearchFilters />
			<SearchResults />
		</div>
	)
}