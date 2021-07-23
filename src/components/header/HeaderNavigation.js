import React from 'react'
import $ from 'jquery'

export const HeaderNavigation = () => {
	$('a.expander').on('click', function (e) {
		e.preventDefault()
		if(window.outerWidth < 800) {
			$(this).toggleClass('active')
		}
	})

	return (
		<div className="nav-wrapper">
			<ul className="link-list">
				<li className="a1">
					<a className="expander" href="#open_career_areas">Career Area</a>
					<ul>
						<li className="a2">
							<a className="expander phys" href="#open_physicians_and_scientists_category">Physicians &amp; Scientists</a>
							<ul>
								<li><a href="#q">All Physician Specialties</a></li>
								<li><a href="#a">Dermatology</a></li>
								<li><a href="#d">Emergency Medicine</a></li>
								<li><a href="#x">Family Medicine</a></li>
								<li><a href="#c">Internal Medicine</a></li>
								<li><a href="#x">Psychiatry &amp; Psychology</a></li>
								<li><a href="#c">Radiology</a></li>
							</ul>
						</li>
						<li className="a2">
							<a className="expander health-prof" href="#open_health_professionals_category">Health Professionals</a>
							<ul>
								<li><a href="#z">All Physician Specialties</a></li>
								<li><a href="#x">Dermatology</a></li>
								<li><a href="#c">Emergency Medicine</a></li>
								<li><a href="#z">Ambulance Service</a></li>
								<li><a href="#z">Certified Registered Nurse Anesthetist</a></li>
								<li><a href="#z">Clinical & Support Services</a></li>
								<li><a href="#z">Clinical Labs</a></li>
								<li><a href="#z">Nurse Practitioner & Physician Assistant</a></li>
								<li><a href="#z">Nursing - Intensive Care Unit</a></li>
								<li><a href="#z">Nursing - Licensed Practical Nurse</a></li>
								<li><a href="#z">Pharmacy</a></li>
								<li><a href="#z">Post-Doctoral Research</a></li>
								<li><a href="#z">Radiology Technologists & Sonographers</a></li>
								<li><a href="#z">Rehabilitation</a></li>
								<li><a href="#z">Research</a></li>
								<li><a href="#z">Senior Care and Services</a></li>
								<li><a href="#z">Surgical Services</a></li>
							</ul>
						</li>
						<li className="a2">
							<a className="expander non" href="#open_non_medical_category">Non Medical</a>
							<ul>
								<li><a href="#c">Coders</a></li>
								<li><a href="#c">Engineering</a></li>
								<li><a href="#c">Finance</a></li>
								<li><a href="#c">Healthcare Technology Management</a></li>
								<li><a href="#c">Information Security</a></li>
								<li><a href="#c">Information Technology</a></li>
								<li><a href="#c">Management Engineering and Consulting</a></li>
								<li><a href="#c">Service Design & Innovation</a></li>
								<li><a href="#c">Support Services</a></li>
							</ul>
						</li>
						<li className="a2">
							<a className="expander remote" href="#open_remote_category">Remote</a>
							<ul>
								<li><a href="#c">Coders</a></li>
								<li><a href="#c">Engineering</a></li>
								<li><a href="#c">Finance</a></li>
								<li><a href="#c">Healthcare Technology Management</a></li>
								<li><a href="#c">Information Security</a></li>
								<li><a href="#c">Information Technology</a></li>
								<li><a href="#c">Management Engineering and Consulting</a></li>
								<li><a href="#c">Service Design & Innovation</a></li>
								<li><a href="#c">Support Services</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="a1">
					<a className="expander" href="#open_learning_opportunities">Learning Opportunities</a>
					<ul>
						<li><a href="/c">Career Awareness</a></li>
						<li><a href="/c">Internships</a></li>
						<li><a href="/c">Mayo Clinic Virtual Career Fair</a></li>
						<li><a href="/c">Medical Residencies & Fellowships</a></li>
						<li><a href="/c">Research</a></li>
						<li><a href="/c">Training Programs</a></li>
					</ul>
				</li>
				<li className="a1"><a href="/benefits">Benefits</a></li>
				<li className="a1"><a href="/about-us">About Us</a></li>
				<li className="a1"><a href="/diversity">Diversity, Equity, &amp; Inclusion</a></li>
			</ul>
		</div>
	)
}