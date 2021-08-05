import React, {useState}  from "react"
import {LinkAway} from "../components/LinkAway";
import { Header } from '../components/header/Header'

const About = () => {
	const [open,setOpen] = useState(false)

	return (
		<div className="about-container">
			<Header page={'about-us'} setOpen={setOpen} open={open} />
			<div className="intro">
				<section className="inner-max">
					<h2>Welcome to a life-changing experience</h2>
					<p>If you want to know what it's really like at Mayo Clinic, just ask. You'll find that our pride – in where we work, and in what we do – is a common trait. You will also find a lot of inspiring stories about lives changed for the better.</p>
				</section>
			</div>
			<div className="about-major-content alt-grey-bg">
				<div className="blocks">
					<div className="desktop-flex go-left">
						<img src="https://tbcdn.talentbrew.com/company/33647/v1_0/img/about_us/breathing.jpg" alt="Nurse and Patient" />
						<section>
							<h2>Careers that <span className={'stay-together'}>change lives</span></h2>
							<p>Mayo Clinic has expanded and changed in many ways, but our values remain true to the vision of our founders. Our primary value – The needs of the patient come first – guides our plans and decisions as we create the future of health care. Join us and you'll find a culture of teamwork, professionalism and mutual respect, and most importantly, a life-changing career.</p>
							<LinkAway link={'/'} text={'Learn More'} />
						</section>
					</div>
					<div className="desktop-flex go-right">
						<img src="https://tbcdn.talentbrew.com/company/33647/v1_0/img/about_us/early-surgery.jpg" alt="old surgery procedure" />
						<section>
							<h2>Changing lives for <span className="stay-together">more than 100 years</span></h2>
							<p>Mayo Clinic was founded in Rochester, Minnesota by brothers Dr. William James Mayo and Dr. Charles Horace Mayo. More than 100 years later, their vision continues to evolve around a single guiding value: "The needs of the patient come first." Today we are the largest integrated, not for-profit medical group practice in the world.</p>
							<LinkAway link={'/'} text={'Learn More'} />
						</section>
					</div>
				</div>
			</div>
			<div className="therapy">&nbsp;</div>
			<div className="intro accololades-intro">
				<section className="inner-max">
					<h2>Accolades</h2>
					<p>We are recognized for high-quality patient care more than any other academic medical center in the nation. These endorsements are very gratifying, but also humbling. They remind us of the tradition that has been entrusted to each one of us, and the legacy of excellence that we uphold every day.
					</p>
				</section>
			</div>
			<div className="accolades">
				<ul>
					<li>
						<button><span className={'title'}>U.S. New &amp; World Report</span>Best Hospitals Honor Roll</button>
						<div className="accolade-description">
							<div className="alt-grey-bg">
								<section>
									<h3><span>01</span>Best Hospitals Honor Roll</h3>
									<p>Mayo Clinic was named the Best Hospital in the Nation for the third year in a row. We were also honored with No. 1 rankings in more categories than any other hospital.</p>
								</section>
							</div>
						</div>
					</li>
					<li>
						<button><span className={'title'}>Forbes</span>America's Best <span className="stay-together">Large Employers</span></button>
						<div className="accolade-description">
							<div className="alt-grey-bg">
								<section>
									<h3><span>03</span>America's Best Large Employers</h3>
									<p>Mayo Clinic was ranked #3 by Forbes in its 2021 list of "America's Best Large Employers".</p>
								</section>
							</div>
						</div>
					</li>
					<li>
						<button><span className={'title'}>Universum</span>Most Attractive Employer</button>
						<div className="accolade-description">
							<div className="alt-grey-bg">
								<section>
									<h3><span>13</span>Most Attractive Employer</h3>
									<p>According to a survey by Universum, college students have named Mayo Clinic a Most Attractive Employer for the 13th year in a row.</p>
								</section>
							</div>
						</div>
					</li>
					<li className={'active'}>
						<button><span className={'title'}>Diversity Inc.</span>Top Hospital and <span className="stay-together">Health System</span></button>
						<div className="accolade-description">
							<div className="alt-grey-bg">
								<section>
									<h3><span>11</span>Top Hospital and Health System</h3>
									<p>In 2018, Diversity Inc named Mayo Clinic to its Top 11 Hospitals and Health Systems list for the seventh straight year. Mayo was ranked using an objective analysis of data collected from a more than 200-question survey.   The survey on which the ranking is based gathers details about an organization's recruitment and talent development processes, the commitment of its leaders to diversity and inclusion, its supplier diversity program and best practices.</p>
								</section>
							</div>
						</div>
					</li>
					<li>
						<button><span className={'title'}>Nursing</span>Magnet Status</button>
						<div className="accolade-description">
							<div className="alt-grey-bg">
								<section>
									<h3>Magnet Status</h3>
									<p>Mayo Clinic locations in Rochester, MN, Jacksonville, FL and Phoenix, AZ have been recognized by the American Nurses Credentialing Center as Magnet Nursing Status locations.</p>
								</section>
							</div>
						</div>
					</li>
				</ul>
				<div className="link-wrapper">
					<LinkAway link={'http://www.mayoclinic.org/about-mayo-clinic/quality/rankings'} text={'Learn more about Quality and Mayo Clinic.'} />
				</div>
			</div>
			<div className="quote ajd_quote">
			<section className="quote ajd_quote">
				<h4>The Life Changers</h4>
				<blockquote className="ajd_quote__blockquote">
					<p className="ajd_quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Maecenas accumsan lacus vel factu es ex commodo tempor ut vitae."</p>
					<cite className="ajd_quote__citation">Jane Doe <br />Position, Title</cite>
				</blockquote>
			</section>
			</div>
			<div id="ajd-nav-testimonials" className="quote ajd_testimonials">
				<section className="quote ajd_quote slides">
					<h4>The Life Changers</h4>
					<div className="sy-box">
						<div className="sy-slides-wrap">
							<div className="sy-slides-crop">
								<ul id="quote-slider" className="sy-list">
									<li className="sy-slide fade useCSS">
										<blockquote className="ajd_quote__blockquote">
											<p className="ajd_quote__text">When you choose an IT career with Mayo Clinic
												you will have an opportunity to engage with new and innovative solutions
												which will improve quality of life and patient outcomes. You will
												partner with brilliant Physicians and Scientist to help drive
												translational medicine in a fast-paced environment where creativity,
												energy, and dedication will result in success.”</p>
												<cite className="ajd_quote__citation">Marie Koctecki <br />Senior Manager, IT Service Delivery</cite>
										</blockquote>
									</li>
								</ul>
							</div>
							<ul className="sy-controls">
								<li className="sy-prev"><a href="#prev">Previous</a></li>
								<li className="sy-next"><a href="#next">Next</a></li>
							</ul>
							<div className="sy-caption-wrap">
								<div className="sy-caption"></div>
							</div>
							<div className="sy-filler ready"></div>
						</div>
						<ul className="sy-pager">
							<li className=""><a href="#1">1</a></li>
							<li className=""><a href="#2">2</a></li>
							<li className="sy-active"><a href="#3">3</a></li>
						</ul>
					</div>

				</section>
			</div>
		</div>
	)
}

export default About