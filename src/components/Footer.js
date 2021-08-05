import React from "react";

export const Footer = () => {
	return (
		<footer>
			<ul>
				<li className="hide-mobile talent">
					<a href="#open_job_alerts">
						<span>Sign-up for our talent community</span>Get job alerts right to your inbox.
					</a>
				</li>
				<li className="search">
					<a href="/sitemap">
						<span>Search Mayo Careers</span>Begin your life-changing journey.
					</a>
				</li>
				<li className="hide-mobile news">
					<a href="/">
						<span>All the latest</span>Check out our news & stories.
					</a>
				</li>
			</ul>
		</footer>
	)
}