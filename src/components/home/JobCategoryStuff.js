import React, {useState} from 'react'

const copy = [
	{
		heading: 'Physicians & Scientists',
		p: 'At Mayo Clinic, you are a colleague of some of the most talented, experienced physicians in the world. You work with patients, conditions, and cases that most doctors will never encounter in their professional lives. In our physician-led environment, you discover a culture of teamwork, professionalism and mutual respect where the needs of the patient always come first.',
		slug: 'physicians_and_scientists',
		img: 'scientist.jpg',
	},
	{
		heading: 'Health Professionals',
		p: 'Mayo Clinic has a legacy of inspiring hope and contributing to health and well-being by providing the best care to every patient through integrated clinical practice, education and research. As a health professional, you will be part of an amazing team committed to solving the most serious and complex medical challenges – one patient at a time.',
		slug: 'health_professionals',
		img: 'pros.jpg',
	},
	{
		heading: 'Non Medical',
		p: 'Envision yourself working for a global leader in an industry fueled by innovation and growth. You’ll find a world of non-medical focused careers with the power to change lives. Whether you’re a new graduate or an experienced business professional, have advanced degrees or a high school diploma, Mayo Clinic has opportunities for you.',
		slug: 'non_medical',
		img: 'non-medical.jpg'
	},
	{
		heading: 'Remote',
		p: 'At Mayo Clinic, we offer a wide range of opportunities that can be done completely remote. We know there is no boundary when it comes to changing patient lives.',
		slug: 'remote',
		img: 'remote.jpg'

	}
]

export const JobCategoryStuff = () => {

	const [active, setActive] = useState(-1)

	const classes = (i) => {
		if(active === i) return 'category-wrapper active'

		return 'category-wrapper'
	}

	return (
		<div id="main-categories">
			<div>
				{copy.map((c,i) => (
					<div className={classes(i)}
					     key={i}
					>
						<button
							id={`toggle-${c.slug}`}
							className={'btn-reset toggle'}
							onClick={() => setActive(i)}
						><span>{c.heading}</span></button>

						<div className="show-info">
							<img src={`//tbcdn.talentbrew.com/company/33647/v1_0/img/job_categories/${c.img}`} alt={''} />
							<section>
								<h3>{c.heading}</h3>
								<p>{c.p}</p>
								<a href="/" className="all-job-link">View open positions</a>
							</section>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}