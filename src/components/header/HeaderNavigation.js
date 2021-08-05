import React from 'react'

export const HeaderNavigation = () => {
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
					<ul className={'longer'}>
						<li className="a2"><a className="expander" href="open_career_awareness">Career Awareness</a>
							<ul>
								<li><a
									href="https://jobs.mayoclinic.org/career-awareness/in-person-student-experience-programs/">In
									Person Student Experience Programs</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/career-awareness/virtual-student-experience-programs/">Virtual
									Student Experience Programs</a></li>
								<li><a href="https://jobs.mayoclinic.org/career-awareness/for-you/">For You</a></li>
							</ul>
						</li>
						<li className="a2"><a className="expander a" href="/">Internships</a>
							<ul>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/administrative-internship-program/">Administrative
									Internship Program (AIP)</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/information-technology/">Information
									Technology</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/biomedical-statistics-informatics/">Biomedical
									Statistics and Informatics</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/public-affairs/">Public
									Affairs</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/center-for-innovation/">Center
									for Innovation</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/student-nurse-extern-summer-program/">Student
									Nurse Extern Summer Program</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/clinical-exercise-physiologist/">Clinical
									Exercise Physiologist</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/summer-iii-nursing-externship/">Summer
									III Nursing Externship</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/dan-abraham-healthy-living-center/">Dan
									Abraham Healthy Living Center</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/summer-lab-science-program/">Summer
									Lab Science Program</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/engineering/">Engineering</a>
								</li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/video-post-production/">Video
									Post-Production</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/internships/information-security/">Information
									Security</a></li>
							</ul>
						</li>
						<li className={'a2'}><a className="b no-expand" href="/">Mayo Clinic Virtual Career Fair</a></li>
						<li className={'a2'}><a className="c no-expand" href="/">Medical Residencies & Fellowships</a></li>
						<li className={'a2'}><a className="d no-expand" href="/">Research</a></li>
						<li className="a2"><a className="expander e" href="/">Training Programs</a>
							<ul>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/administrative-fellowship-program/">Administrative
									Fellowship Program</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/nurse-residency-program-minnesota/">Nurse
									Residency Program (Rochester, Minnesota)</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/management-engineering-internal-consulting/">Management
									Engineering &amp; Internal Consulting</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/nurse-residency-program-minnesota-2/">NWWI
									Nurse Residency Program</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/nurse-residency-program-az/">Nurse
									Residency Program (Arizona)</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/perioperative-nursing-program/">Perioperative
									Nursing Program</a></li>
								<li><a
									href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/nurse-residency-program-florida/">Nurse
									Residency Program (Florida)</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="a1"><a href="/benefits">Benefits</a></li>
				<li className="a1"><a href="/about-us">About Us</a></li>
				<li className="a1"><a href="/diversity">Diversity, Equity, &amp; Inclusion</a></li>
			</ul>
		</div>
	)
}