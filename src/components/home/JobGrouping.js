import React, {useState} from "react";
import {JobsForYou} from "../JobsForYou";
import {RecentViewedJobs} from "../RecentViewedJobs";
import {SavedJobs} from "../SavedJobs";

export const JobGrouping = () => {
	const [activeList,setActiveList] = useState(0)

	return (
		<div className="container job-grouping">
			<div>
				<div className="job-max">
					<JobsForYou activeList={activeList} setActiveList={setActiveList} />
					<RecentViewedJobs activeList={activeList} setActiveList={setActiveList} />
					<SavedJobs activeList={activeList} setActiveList={setActiveList} />
				</div>
			</div>
		</div>
	)
}