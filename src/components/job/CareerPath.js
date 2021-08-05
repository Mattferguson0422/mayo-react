import React, {useState} from "react";

export const CareerPath = () => {

	const [active, setActive] = useState('highschool')

	const classes = (pick) => pick === active ? `${pick} active` : pick

	return (
		<div className={'career-path'}>
			<div className={classes('highschool')}>
				<div className={'button-holder'}>
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('highschool')}>
						<span>
							<span className="stay-together">High School Diploma/</span>Vocational Degree
						</span>
					</button>
				</div>
				<section className={'content'}>
					<h4><span className="stay-together">High School Diploma/</span>Vocational Degree</h4>
					<div>
						<ul>
							<li>Health Unit Coordinator</li>
							<li>Surgical Core/Sterilization Technician</li>
							<li>Patient Care/Nursing Assistant or Technician</li>
							<li>Emergency Department Technician</li>
							<li>IV Technician</li>
						</ul>
						<ul>
							<li>Urology Technician</li>
							<li>Licensed Practical Nurse</li>
							<li>Medical Assistant</li>
							<li>Associate Degree</li>
							<li>Registered Nurse</li>
							<li>Certified Surgical Technologist</li>
						</ul>
					</div>
				</section>
			</div>
			<div className={classes('bachelors')}>
				<div className={'button-holder'}>
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('bachelors')}
					>Bachelor's Degree</button>
				</div>
				<section className={'content'}>
					<h4>Bachelor's Degree</h4>
					<ul>
						<li>Certified Surgical Assistant</li>
						<li>Clinical Resource Nurse</li>
						<li>Nursing Research</li>
						<li>Social Worker</li>
						<li>Registered Nurse</li>
						<li>Nurse Supervisor</li>
						<li>Nurse Manager</li>
					</ul>
				</section>
			</div>
			<div className={classes('graduate')}>
				<div className="button-holder">
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('graduate')}
					>Graduate Degree</button>
				</div>
				<section className={'content'}>
					<h4>Graduate Degree</h4>
					<ul>
						<li>Nursing Education Specialist</li>
						<li>Nurse Scientist</li>
						<li>Clinical Nurse Specialist</li>
						<li>Nurse Practitioner</li>
						<li>Certified Registered Nurse Anesthetist</li>
						<li>Nurse Leadership</li>
						<li>Social Worker</li>
					</ul>
				</section>
			</div>
		</div>
	)
}