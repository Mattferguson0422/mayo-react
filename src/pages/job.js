import React, {useState} from "react"
import {Header} from "../components/header/Header";
import {EventLinks2} from "../components/EventsLink2";
import {JobDetails} from "../components/job/JobDetails";

const Job = () => {
	const [open,setOpen] = useState(false)

	return (
		<div id={'page'} className={open ? 'mobile-open':''}>
			<Header
				open={open}
				setOpen={setOpen}
				page={'job'}
			/>
			<JobDetails />git@github.com:Mattferguson0422/mayo-react.git
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
		</div>
	)
}

export default Job