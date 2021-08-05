import React from 'react'

const home = (
	<React.Fragment>
		<div id="banner-pics">
			<h1 id="image-1"></h1>
		</div>
		<p className="subtitle">Life-changing careers</p>
	</React.Fragment>
)

const defaultBanner = (
	<div className="bg relative">
		<h1>About Us</h1>
		<p className="subtitle">Search <span className="highlight">life-changing</span> careers.</p>
	</div>
)

export const Banner = ({page}) => {

	const showBanner = () => {
		switch (page) {
			case 'home':
				return home
			case 'about-us':
				return (
					<React.Fragment>
						<div className="bg relative">
							<h1>About Us</h1>
							<p className="subtitle">Life-changing careers</p>
						</div>
					</React.Fragment>
				)
			default:
				return defaultBanner
		}
	}
	return (
		<div className="banner">
			<div className="max-content-width">
				{showBanner()}
				<form id="search-form-df0d557481" className="search-form expandable" data-handle="expandable-toggle"
				      data-expandable="true" action="/search-jobs" data-selector-name="searchform"
				      data-filtered-categories="" data-location-geotype="ipambientonly"
				      data-geolocation-url="/search-jobs/GetSearchRequestGeoLocation" data-module-name="Search Form"
				      data-limited-facets="False" data-default-radius="" data-location-cookie-lifespan="5"
				      data-use-location-pin="true" data-expandable-id="search-form-df0d557481" noValidate="novalidate">

					<h2 className="mobile-only">Search <span className="highlight">life-changing</span> careers.</h2>
					<div className="search-form-fields">
						<p className="keyword-wrapper">
							<label htmlFor="search-keyword-df0d557481" aria-hidden="true">Search by Role or Keyword</label>
							<input type="search" id="search-keyword-df0d557481" className="search-keyword"
							       placeholder="Role or Keyword" autoComplete="off" name="k" value="" maxLength="150" />
						</p>
						<p className="location-wrapper">
							<label htmlFor="search-location-df0d557481" aria-hidden="true">Enter Location</label>
							<input type="text" id="search-location-df0d557481" className="search-location"
							       placeholder="Location" autoComplete="off" name="l" value="" maxLength="150" data-lat=""
							       data-lon="" data-kt="" data-lt="" data-lp="" data-ajax-url="/search-jobs/locations?term="
							       data-country-codes="" data-display-typeahead="true"
							       data-error-message="Please try again. Choose a location from the suggestions or clear the field to submit your search." />
								<input type="button" id="search-location-pin-df0d557481" className="location-pin"
								       value="Use Location" aria-hidden="true" />
						</p>
						<input id="search-org-ids-df0d557481" name="orgIds" type="hidden" value="33647" />
							<button id="search-submit-df0d557481">Search</button>
							<p className="search-location-error" aria-hidden="true"></p>
					</div>
				</form>
			</div>
		</div>
	)
}