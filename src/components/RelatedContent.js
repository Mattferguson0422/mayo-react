import React from "react";

export const RelatedContent = () => {
	return (
		<div className="content-page-module">
			<ul className="content-page-module__list">
				<li className="content-page-module__item">
					<a className="content-page-module__link" href="/about-us">
						<h3 className="content-page-module__title">About Us</h3>
						<p className="content-page-module__description">If you want to know what it's really like at
							Mayo Clinic, just ask. You'll find that our pride – in where we work, and in what we do
							– is a common trait. You will also find a lot of inspiring stories about lives changed
							for the better.</p>
						<p className="link-away">Learn More</p>
					</a>
				</li>
				<li className="content-page-module__item">
					<a className="content-page-module__link"
					   href="https://jobs.mayoclinic.org/learning-opportunities/training-programs/nurse-residency-program-minnesota-2/">
						<h3 className="content-page-module__title">Nurse Training Programs</h3>
						<p className="content-page-module__description">The Nurse Residency Program at Mayo Clinic
							Health System Northwest Wisconsin is a year-long education program that provides you an
							additional opportunity as a newly licensed nurse to develop your leadership skills and
							receive support during your transition from student nurse to competent professional
							nurse.</p>
						<p className="link-away">Learn More</p>
					</a>
				</li>
				<li className="content-page-module__item">
					<a className="content-page-module__link" href="https://jobs.mayoclinic.org/benefits/">
						<h3 className="content-page-module__title">Benefits</h3>
						<p className="content-page-module__description">As your career evolves, our compensation and
							benefits packages are designed to change with you — meeting needs now, and anticipating
							what comes next. We know that when Mayo Clinic takes care of you, you can take better
							care of our patients.</p>
						<p className="link-away">Learn More</p>
					</a>
				</li>
			</ul>
		</div>
	)
}