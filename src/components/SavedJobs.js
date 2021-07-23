import React from "react";

export const SavedJobs = ({activeList, setActiveList}) => {
	return (
		<section className={"recently-viewed-job-list sj" + (activeList === 3 ? ' active':'')} data-recently-viewed-jobs="false"
		         data-company-site-id="42782" data-ajax-url="//mayo.runmytests.com/module/postmodule"
		         data-module-name="Saved Jobs" data-module-type="RecentlyViewedJobList"
		         data-selector-name="recentlyviewedjoblist" data-content-type="UserSelected">
			<button className={'btn-reset'} onClick={() => setActiveList(3)}>Saved Jobs</button>
			<ul>
				<li>
					<span className="location">Rochester, Minnesota</span>
					<a href="/job/rochester/registered-nurse-rn-day-outpatient-neurology-lumbar-puncture/33647/19357358"
					   data-job-id="19357358">Registered Nurse (RN) Day - Outpatient Neurology Lumbar Puncture</a>
					<span className="category">Nursing</span>
				</li>
				<li>
					<span className="location">Eau Claire, Wisconsin</span>
					<a href="/job/eau-claire/registration-rep/33647/19357359" data-job-id="19357359">Registration
						Rep</a>
					<span className="category">Administration, Business, Finance, Office &amp; Administrative Support, Support Services</span>
				</li>
			</ul>
		</section>
	)
}