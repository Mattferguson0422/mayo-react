import React, {useState} from "react"
import {Header} from "../components/header/Header";
import {EventLinks2} from "../components/EventsLink2";
import {SocialShare} from "../components/job/SocialShare";
import {Footer} from "../components/Footer";
import {AJDHeader} from "../components/job/AJDHeader";
import {AJDJobDetails} from "../components/job/AJDJobDetails";
import {CareerPath} from "../components/job/CareerPath";
import {Benefits} from "../components/job/Benefits";
import {AjdCareerPath} from "../components/job/ajdCareerPath";

const nursingBenefits = [
	{
		icon: 'money',
		heading: 'Pension & 403(b)/401(k) Match'
	},
	{
		icon: 'teacher',
		heading: 'Professional Development'
	},
	{
		icon: 'calendar',
		heading: 'Paid Time Off & Disability'
	},
	{
		icon: 'cash',
		heading: 'Relocation Assistance'
	},
	{
		icon: 'dots',
		heading: 'Choose From a Wide Number of Specialties and Settings'
	},
]

const Nursing = () => {
	const [open,setOpen] = useState(false)

	return (
		<div id={'page'} className={open ? 'mobile-open':''}>
			<Header
				open={open}
				setOpen={setOpen}
				page={'advanced-job'}
			/>
			<div id="advanced-job">
				<AJDHeader />
				<section id="ajd-nav-overview" className="ajd_section ajd_overview overview-alternative" tabIndex="-1">
					<h2 className="ajd_section__heading ajd_overview__heading">Overview</h2>

					<div className="max-width-wrapper">
						<p className="ajd_overview__about-job"><span className="highlight">Be challenged to deliver innovative solutions that will change health care.</span>
						</p>
						<p className="ajd_overview__about-job">Mayo Clinic’s tech culture is rooted in passion for
							technology, embraces innovative thinking and strives for high performance. Our teams drive
							change in health care through comprehensive connected health and digital transformation
							strategies.</p>
						<p className="ajd_overview__about-job nm">Some examples of our major initiatives are:</p>
						<ul>
							<li>Utilizing artificial intelligence and machine learning principles to develop next
								generation patient centric care systems
							</li>
							<li>Transforming the practice by applying data science techniques to discover new approaches
								to health care delivery
							</li>
							<li>Leveraging Enterprise Architecture to construct integration centricity, promote data
								liquidity, and provide innovation support
							</li>
						</ul>
						<p className="ajd_overview__about-job">This transformation creates, connects and applies
							integrated knowledge to deliver the best health care, health guidance and health information
							to patients, customers, partners, providers, employees anywhere and anytime so the needs of
							the patient come first.</p>

					</div>
				</section>
				<AJDJobDetails />
			</div>
			<SocialShare />
			<div className="job-details-support">
				<div className="callout map">
					<a className="callout__wrapping-link" data-callout-action="job location" data-target="Location"
					   data-selector-name="calloutactionlink"
					   href="/job_location/bloomer/facilities-manager/33647/19307457/643119">
						<div>
							<h3>About our location</h3>
							<p>Bloomer, Wisconsin</p>
							<p className="callout__text link-away">Learn More</p>
						</div>
						<img className="callout__image" src="http://tbcdn.talentbrew.com/company/33647/v1_0/img/map.png"
						     alt="Map" />
					</a>

				</div>
				<EventLinks2 />
			</div>
			<div className={'ajd-version'}>
				<section>
					<h2>Career Path</h2>
					<p>Mayo Clinic offers many different nursing career opportunities to meet the needs of nursing professionals with a variety of educational and work experiences.</p>
					<p>Whether you have a vocational certificate, or an associate, bachelor's, master's or doctoral degree, Mayo Clinic's multidisciplinary, team-oriented work environment presents opportunities that are rarely experienced elsewhere.</p>
				</section>
				<CareerPath />
			</div>
			<Benefits items={nursingBenefits} />
			<AjdCareerPath />
			<div className="content-page-module news">
				<h2 className="content-page-module__heading">News</h2>
				<ul className="content-page-module__list">
					<li className="content-page-module__item">
						<a className="content-page-module__link"
						   href="https://newsnetwork.mayoclinic.org/discussion/nursing-at-mayo-clinic-in-rochester-awarded-magnet-designation-for-sixth-time/">
							<div className="content-page-module__image-wrapper">
								<img className="content-page-module__image"
								     src="https://tbcdn.talentbrew.com/company/33647/v1_0/img/job_categories/nursing1.jpg"
								     alt="Nursing" />
							</div>
							<h3 className="content-page-module__title">Nursing at Mayo Clinic in Rochester awarded
								Magnet designation for sixth time.</h3>
							<p className="content-page-module__description">On Dec. 16, the American Nurses
								Credentialing Center (ANCC) notified... Department of Nursing in Rochester that it had
								achieved its sixth designation as a Magnet Nursing Program to the Centers for
								Disease…</p>
							<p className="link-away">Learn More</p>
						</a>
					</li>
					<li className="content-page-module__item">
						<a className="content-page-module__link"
						   href="https://newsnetwork.mayoclinic.org/discussion/throwbackthursday-nurse-coordinator-concept-helps-improve-patient-care/">
							<div className="content-page-module__image-wrapper">
								<img className="content-page-module__image"
								     src="https://tbcdn.talentbrew.com/company/33647/v1_0/img/job_categories/old.jpg"
								     alt="Nursing" />
							</div>
							<h3 className="content-page-module__title">#ThrowbackThursday: ‘Nurse Coordinator’ Concept
								Helps Improve Patient Care</h3>
							<p className="content-page-module__description">Nurses at both Methodist and Saint Marys
								Hospitals in recent months have stepped back from their everyday.</p>
							<p className="link-away">Learn More</p>
						</a>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	)
}

export default Nursing