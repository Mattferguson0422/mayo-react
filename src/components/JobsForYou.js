import React from "react";

export const JobsForYou = ({activeList, setActiveList}) => {
	return (
		<section className={"job-list jobs4u" + (activeList === 1 ? ' active':'')} data-selector-name="joblist">
			<button className={'btn-reset'} onClick={() => setActiveList(1)}>Jobs for you</button>
			<ul>
				<li>
					<span className="location">Rochester, Minnesota</span>
					<a href="/job/rochester/senior-research-fellow/33647/19357400" data-job-id="19357400">Senior
						Research Fellow</a>
					<span className="category">Postdoc &amp; Temporary Research</span>
				</li>
				<li>
					<span className="location">Onalaska, Wisconsin</span>
					<a href="/job/onalaska/anesthesiologist/33647/19357399"
					   data-job-id="19357399">Anesthesiologist</a>
					<span className="category">Physicians &amp; Scientists</span>
				</li>
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