import React, {useState} from 'react'

export const HospitalNation = () => {
	const [stats, setStats] = useState(false)

	return (
		<div id="hospital-nation">
			<div className={'max-content-width'}>
				<div className="top">
					<div className={'column-1'}>
						<h2>The <span className="highlight">#1</span> hospital <span className="stay-together">in the nation.</span></h2>
						<button
							id="stats-toggle"
							className={"btn-reset" + (stats ? ' opened':"")}
							type={"button"}
							onClick={() => setStats(!stats)}
						>statistics</button>
					</div>

					<div className="column-2">
						<p>The No. 1 hospital in the United States by U.S. News &amp; World Report for 2020-2021. More than one million patients from 138 countries are seen at Mayo Clinic locations each year.
						</p>
					</div>
				</div>
				{stats &&
				<div className={'bottom stats'}>
					<div>
						<section className="patient">
							<h3>1<span className="accent">,000,000+</span></h3>
							<p>More than 1 million people from 140 countries come to Mayo Clinic in the U.S. <span
								className={'stay-together'}>every year</span></p>
						</section>
						<section className="test">
							<h3>25<span className="accent">M</span></h3>
							<p>25 million tests performed by Mayo Clinic Laboratories <span className={'stay-together'}>every year</span>
							</p>
						</section>
						<section className="employee">
							<h3>65<span className="accent">,000</span></h3>
							<p>Employees including physicians, health professionals, and non-medical and tech
								specialists</p>
						</section>
					</div>
					<button
						className={"btn-reset close"}
						type={"button"}
						onClick={() => setStats(!stats)}>close
					</button>
				</div>
				}
			</div>
		</div>
	)
}