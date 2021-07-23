import React, {useState} from "react";

export const JobAlerts = () => {

	const [open, setOpen] = useState(false)

	return (
		<React.Fragment>
		<div className={'ja-trigger'}>
			<div className="max-content-width">
				<div className="ja-intro">
					<section>
						<h2>Join our talent community.</h2>
						<p>Join our global talent community to receive alerts when new life-changing opportunities
							become available.</p>
					</section>
					<button className="btn-reset signup" onClick={() => setOpen(true)}>Sign Up</button>
				</div>
			</div>
		</div>
			{open &&
			<div className="ja-wrapper">
				<div className={'closeout max-content-width'}>
					<button className="btn-reset" onClick={() => setOpen(false)}>close</button>
				</div>
				{form}
			</div>
			}
		</React.Fragment>
	)
}

const form = <form id="form-f462499a25" className="data-form  " action="/form/submit"
                   data-success-message="Your subscription was submitted successfully."
                   data-error-message="There was an error processing your request." data-close-text="Close"
                   data-form-type="Job Alert" noValidate="novalidate">
	<h2 className="form-display-heading">Join Our Talent Community</h2>
	<p className="form-instructions">Sign up, stay connected and get opportunities that match your skills sent right to
		your inbox</p>
	<p className="form-field required">
		<label htmlFor="form-field-1d813ae710">Email Address</label>
		<input aria-required="true" data-val="true" data-val-length-max="255"
		       data-val-regex="Please enter a valid email address."
		       data-val-regex-pattern="^[a-zA-Z0-9-.!#$%&amp;'*+/=?^_`{|}~à-ÿÀ-ß]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
		       data-val-required="This field is required." id="form-field-1d813ae710" maxLength="255"
		       name="EmailAddress"
		       pattern="^[a-zA-Z0-9-.!#$%&amp;'*+/=?^_`{|}~à-ÿÀ-ß]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
		       placeholder="Name@email.com" required="required" type="text" />
		<span className="instruction-text"></span>
		<span className="field-validation-valid"
		      data-valmsg-for="EmailAddress"
		      data-valmsg-replace="true" role="status"></span>
	</p>
	<p className="form-field required">
		<label htmlFor="form-field-f300992778">Phone Number</label>
		<input aria-required="true" data-val="true" data-val-length-max="25" data-val-regex="Invalid value."
		       data-val-regex-pattern="^(?:(?:\+?[0-9]{1,3}\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
		       data-val-required="This field is required." id="form-field-f300992778" maxLength="25" name="MobilePhone"
		       pattern="^(?:(?:\+?[0-9]{1,3}\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
		       placeholder="123-456-7890" required="required" type="tel" />
		<span className="instruction-text"></span>
		<span className="field-validation-valid"
		      data-valmsg-for="MobilePhone"
		      data-valmsg-replace="true"
		      role="status"></span>
	</p>
	<p className="form-field">
		<label htmlFor="form-field-28141da40b">Upload Resume/CV</label><span className="instruction-text"
		                                                                     id="upload-instructions-form-field-28141da40b">(Must be under 1MB)</span>
		<input aria-describedby="upload-instructions-form-field-28141da40b" data-val="true" id="form-field-28141da40b"
		       name="Resume" type="file" />
			<button aria-hidden="true" className="file-remove" href="#">Remove</button>
			<span className="field-validation-valid" data-valmsg-for="Resume" data-valmsg-replace="true"
			      role="status"></span></p>
	<i>*Denotes required field</i>
	<fieldset className="form-field required" data-ajax-category="/Keywords/GetAvailableCategories?displayname="
	          data-ajax-location="/Keywords/GetAvailableLocations?displayname=" data-all-jobs-text="All Jobs"
	          data-both-required="False" data-id="33647" data-multiselect-enabled="false" data-site-id="0">
		<legend>Interested In</legend>
		<span className="instruction-text">Select a job category from the list of options. Select a location from the list of options. Finally, click “Add” to create your job alert.</span><span
		className="field-validation-valid" data-valmsg-for="Category" data-valmsg-replace="true" role="status"></span>
		<p>
			<label htmlFor="form-field-b9a4e1754d-category">Specialty</label>
			<select autoComplete="off" className="keyword-category required-keyword-0"
			        data-keyword-list="form-field-b9a4e1754d-keywords" data-val="true"
			        data-val-requiredkeyword="This field is required." id="form-field-b9a4e1754d-category"
			        name="Category">
				<option value="">Select a Job Category</option>
				<option value="84636">Administration, Business, Finance</option>
				<option value="84650">Administration, Business, Finance, Clinical Labs&nbsp;and Research</option>
				<option value="84651">Administration, Business, Finance, Clinical Labs&nbsp;and Research,
					Office &amp; Administrative Support
				</option>
			</select>
		</p>
		<p>
			<label htmlFor="form-field-b9a4e1754d-location">Location</label>
			<select autoComplete="off" className="keyword-location required-keyword-1"
			        data-keyword-list="form-field-b9a4e1754d-keywords" data-location-facet-type="4"
			        data-temp-location-facet-type="4" data-val="true" data-val-requiredkeyword="This field is required."
			        id="form-field-b9a4e1754d-location" name="Location">
				<option value="">Select Location</option>
				<option value="6252001-5037779-5016024">Albert Lea, Minnesota</option>
				<option value="6252001-5279468-5244109">Arcadia, Wisconsin</option>
			</select>
		</p>
		<p><label htmlFor="form-field-9b5de23317-facet-0">Area of Interest</label><select autoComplete="off"
		                                                                                  className="keyword-facet"
		                                                                                  data-custom-facet-name="Area of Interest"
		                                                                                  data-custom-facet-term="industry"
		                                                                                  data-custom-facet-value=""
		                                                                                  data-facet-name="Area of Interest"
		                                                                                  data-facet-term="industry"
		                                                                                  data-list-name="JobAlertCategoryLocation"
		                                                                                  id="form-field-9b5de23317-facet-0"
		                                                                                  name="Facet_0">
			<option value="">Select One</option>
			<option value="Nursing">Nursing</option>
			<option value="Laboratory Medicine &amp; Pathology">Laboratory Medicine &amp; Pathology</option>
			<option value="Radiology">Radiology</option>
			<option value="Surgery">Surgery</option>
			<option value="Information Technology">Information Technology</option>
		</select></p>
		<button className="keyword-add" disabled="disabled" type="button">Add</button>
		<ul className="keyword-selected" data-keyword-id="form-field-7b10676809-keywords"
		    data-list-name="JobAlertCategoryLocation">
			<li data-category-facet-type="1" data-category-name="Administration, Business, Finance"
			    data-category-term="84636" data-custom-facet-name="ALL" data-custom-facet-term="ALL"
			    data-custom-facet-value="" data-keyword-id="form-field-7b10676809-keywords" data-location-facet-type=""
			    data-location-name="" data-location-term="" className=""><span className="keyword-text">Administration, Business, Finance</span><a
				aria-label="Remove Administration, Business, Finance" className="keyword-remove" href="#any">Remove</a>
			</li>
			<li data-category-facet-type="" data-category-name="" data-category-term="" data-custom-facet-name="ALL"
			    data-custom-facet-term="ALL" data-custom-facet-value="" data-keyword-id="form-field-7b10676809-keywords"
			    data-location-facet-type="4" data-location-name="Albert Lea, Minnesota"
			    data-location-term="6252001-5037779-5016024" className=""><span className="keyword-text">Albert Lea, Minnesota</span><a
				aria-label="Remove Albert Lea, Minnesota" className="keyword-remove" href="#any">Remove</a></li>
		</ul>
	</fieldset>
	<p className="form-field confirm-email" aria-hidden="true"
	   style={{
	   	    display: 'block',
		    height: '0',
		    overflow: 'hidden',
		    position: 'absolute',
		    textIndent: '-9999em',
		    width: '0',
		    zIndex: '-1'
	   }}>
		<label aria-hidden="true" htmlFor="form-field-5">Confirm Email</label>
		<input aria-hidden="true" autoComplete="off" id="form-field-5" name="EmailConfirm" tabIndex="-1" type="text"
		       value="" />
	</p>
	<input id="form-type-96d79ec0ea" name="FormType" type="hidden" value="JobAlert" />
	<input id="module-name-96d79ec0ea" name="ModuleName" type="hidden" value="Basic Job Alerts" />
	<input id="job-id-96d79ec0ea" name="JobId" type="hidden" value="" />
	<input id="job-organization-id-96d79ec0ea" name="JobOrganizationId" type="hidden" value="33647" />
	<input id="redirect-url-96d79ec0ea" name="RedirectUrl" type="hidden" value="" />
	<input id="page-url-96d79ec0ea" name="PageUrl" type="hidden" value="mayo.runmytests.com:80/" />
	<input id="page-name-96d79ec0ea" name="PageName" type="hidden" value="Homepage" />
	<input id="page-type-96d79ec0ea" name="PageType" type="hidden" value="Home" />
	<p className="form-field submit">
		<button type="submit">Subscribe</button>
	</p>
	<p className="form-field form-message"></p>
</form>