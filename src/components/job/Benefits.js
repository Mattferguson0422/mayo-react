import React from "react";

export const Benefits = ({items}) => (
	<section id="anchor-rewards" className="ajd_section ajd_rewards">
		<h2 className="ajd_section__heading ajd_rewards__heading">Benefits</h2>

		<ul className="ajd_rewards__ul">
			{items.map((item,key) => (
				<li className="ajd_rewards__li enhance-element" key={key}>
					<i className={`ajd_rewards__ico ${item.icon}`} />
					<h3 className="ajd_rewards__title">{item.heading}</h3>
				</li>
			))}
		</ul>
	</section>
)