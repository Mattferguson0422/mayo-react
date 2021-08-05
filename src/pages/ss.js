import React, {useState} from "react"
import {Header} from "../components/header/Header";
import {EventLinks2} from "../components/EventsLink2";
import {Content} from "../components/ss/Content";
import {SocialMedia} from "../components/header/SocialMedia";

const Ss = () => {
	const [open,setOpen] = useState(false)

	return (
		<div id={'page'} className={open ? 'mobile-open':''}>
			<Header
				open={open}
				setOpen={setOpen}
				page={'default-ss'}
			/>
			<Content />
			<div id="cms-created-page-modules">
				<section className="event-module">
					<p className="event-name">
						<b>Event Title Label</b> Event Title
					</p>

					<p className="event-date">
						<b>Date</b> 1/23/18
					</p>

					<p className="event-time">
						<b>Time</b> 9am est
					</p>

					<p className="event-loc-name">
						<b>Event Venue/Location Name</b> Event Venue/Location Name
					</p>

					<p className="event-address">
						<b>Address of Event Location</b> Address of Event Location
					</p>

					<p className="event-description">
						<b>Event Description</b> Event Description
					</p>

					<div className="social-media" data-selector-name="event">
						<ul>
							<li><a className="social-media-facebook" href="//facebook.com/MayoClinic"
							       target="_blank">Facebook</a></li>
							<li><a className="social-media-twitter" href="//twitter.com/mayoclinic"
							       target="_blank">Twitter</a></li>
							<li><a className="social-media-linkedin" href="//linkedin.com/company/mayo-clinic/jobs/"
							       target="_blank">LinkedIn</a></li>
						</ul>
					</div>
				</section>
				<form id="social-share" action="/subscribe/workwithme" data-error="" data-logged-in=""
				      data-registered="" data-approved-domains=""
				      data-ajax-url="//preview.talentbrew.com/subscribe/workwithme" data-workwithme="False"
				      data-selector-name="socialshare">
					<section className="social-share">
						<h3>Social share headline</h3>
						<ul className="social-share-items">
							<li><a className="share facebook" data-job-id="" data-job-location=""
							       data-job-title="Test Page"
							       data-share-refer-url="//preview.talentbrew.com/subscribe/refer/"
							       data-share-type="facebook"
							       href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fpreview.talentbrew.com%2fpagepreview%2f651287%3futm_source%3dfacebook.com%26utm_medium%3dsocial_post%26utm_campaign%3dMayo_Clinic_social"
							       target="_blank">Facebook</a></li>
							<li><a className="share twitter" data-job-id="" data-job-location=""
							       data-job-title="Test Page"
							       data-share-refer-url="//preview.talentbrew.com/subscribe/refer/"
							       data-share-type="twitter"
							       href="https://twitter.com/intent/tweet?text=Test+Page&amp;url=https://preview.talentbrew.com/pagepreview/651287?utm_source=twitter.com%26utm_medium=social_post%26utm_campaign=Mayo_Clinic_social"
							       target="_blank">Twitter</a></li>
							<li><a className="share linkedin" data-job-id="" data-job-location=""
							       data-job-title="Test Page"
							       data-share-refer-url="//preview.talentbrew.com/subscribe/refer/"
							       data-share-type="linkedin"
							       href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3a%2f%2fpreview.talentbrew.com%2fpagepreview%2f651287%3futm_source%3dlinkedin.com%26utm_medium%3dsocial_post%26utm_campaign%3dMayo_Clinic_social&amp;title=Test+Page"
							       target="_blank">LinkedIn</a></li>
							<li><a className="share email" data-job-id="" data-job-location=""
							       data-job-title="Test Page"
							       data-share-refer-url="//preview.talentbrew.com/subscribe/refer/"
							       data-share-type="email"
							       href="mailto:?subject=Test Page&amp;body=https%3a%2f%2fpreview.talentbrew.com%2fpagepreview%2f651287%3futm_source%3demail%26utm_medium%3dsocial_post%26utm_campaign%3dMayo_Clinic_social">Email</a>
							</li>
						</ul>
					</section>
				</form>
				<section className="job-list" data-selector-name="joblist">
					<h3>Jobs List Heading</h3>
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
							   data-job-id="19357358">Registered Nurse (RN) Day - Outpatient Neurology Lumbar
								Puncture</a>
							<span className="category">Nursing</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default Ss