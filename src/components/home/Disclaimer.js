import React from "react";
import {MainLogo} from "../header/MainLogo";
import {SocialMediaHome} from "./SocialMediaHome";

export const Disclaimer = () => {
	return (
		<div className="disclaimer">
			<div>
				<p><strong>Equal opportunity</strong></p>
				<p>All qualified applicants will receive consideration for employment without regard to race,
					color, religion, sex, gender identity, sexual orientation, national origin, protected
					veteran status, or disability status. <a
						href="http://www.mayoclinic.org/documents/eeoc-poster-withrevisions-pdf/doc-20086127"
						title="Learn more about EEO is the Law" target="_blank">Learn more about
						"EEO is the Law."</a> Mayo Clinic participates in E-Verify and may provide the Social
					Security Administration and, if necessary, the Department of Homeland Security with
					information from each new employee's Form I-9 to confirm work authorization.</p>
				<p><strong>Reasonable accommodations</strong></p>
				<p>Mayo Clinic provides reasonable accommodations to individuals with disabilities to increase
					opportunities and eliminate barriers to employment.&nbsp; If you need a reasonable
					accommodation in the application process; to access job postings, to apply for a job, for a
					job interview, for pre-employment testing, or with the onboarding process, please contact HR
					Connect at 507-266-0440 or&nbsp; 888-266-0440.</p>
				<p><strong>Job offers</strong></p>
				<p>Job offers are contingent upon successful completion of a post offer placement assessment
					including a urine drug screen, immunization review and tuberculin (TB) skin testing, if
					applicable.</p>
			</div>
			<div>
				<p><strong>Advertising</strong></p>
				<p>Mayo Clinic is a not-for-profit organization and proceeds from Web advertising help support
					our mission. Mayo Clinic does not endorse any of the third party products and services
					advertised.</p>
				<p><a href="http://www.mayoclinic.org/about-this-site/advertising-sponsorship-policy"
				      target="_blank" title="Advertising and sponsorship policy" rel="noopener">Advertising and
					sponsorship policy</a> | <a
					href="http://www.mayoclinic.org/about-this-site/advertising-sponsorship" target="_blank"
					title="Advertising and sponsorship opportunities" rel="noopener">Advertising and sponsorship
					opportunities</a></p>
				<p><strong>Reprint Permissions</strong></p>
				<p>A single copy of these materials may be reprinted for noncommercial personal use only.
					"Mayo," "Mayo Clinic," "MayoClinic.org," "Mayo Clinic Healthy Living," and the triple-shield
					Mayo Clinic logo are trademarks of Mayo Foundation for Medical Education and Research.</p>
				<p>Any use of this site constitutes your agreement to the Terms and Conditions and Privacy
					Policy linked below.</p>
				<p><a href="http://www.mayoclinic.org/about-this-site/terms-conditions-use-policy"
				      target="_blank" title="Terms and Conditions" rel="noopener">Terms and Conditions</a> | <a
					href="http://www.mayoclinic.org/about-this-site/privacy-policy" title="Privacy Policy"
					target="_blank" rel="noopener">Privacy Policy</a> | <a
					href="http://www.mayo.edu/pmts/mc5200-mc5299/mc5256-01.pdf?_ga=2.247307972.1310903246.1507557674-1633124738.1507557674"
					target="_blank" title="Notice of Privacy Practices" rel="noopener">Notice of Privacy
					Practices</a> | <a
					href="http://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/documents/2016/10/31/17/12/non-appendix-a.ashx"
					target="_blank" title="Notice of Nondiscrimination" rel="noopener">Notice of
					Nondiscrimination</a></p>
				<p>&copy; 1998-2021 Mayo Foundation for Medical Education and Research (MFMER). All rights
					reserved.</p>
			</div>
		</div>
	)
}

export const FooterSocial = () => {
	return (
		<div className="footer-social">
			<MainLogo />
			<div>Life-changing careers</div>
			<SocialMediaHome />
		</div>
	)
}