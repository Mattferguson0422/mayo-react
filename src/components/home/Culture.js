import React, {useState} from "react";
import {LinkAway} from "../LinkAway";

export const Culture = () => {

	const [active, setActive] = useState('diversity')

	const classes = (pick) => pick === active ? `${pick} active` : pick
	const imageClasses = (pick) => pick === active ? `${pick}-image active` : `${pick}-image`

	return (
		<div id={'culture'}>
			<ul className="support-image">
				<li className={imageClasses('diversity')}>&nbsp;</li>
				<li className={imageClasses('benefits')}>&nbsp;</li>
				<li className={imageClasses('learning')}>&nbsp;</li>
			</ul>
			<div className={classes('diversity')}>
				<div className={'button-holder'}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.28 26.67">
						<g id="Layer_2" data-name="Layer 2">
							<g id="_32x32-Guides" data-name="32x32-Guides">
								<path className="cls-1"
								      d="M24.75,16.6l3.53-3.53-1.41-1.42-3.54,3.54L18.85,10.7l-1.42,1.42L24,18.72a1,1,0,0,1,0,1.42,1,1,0,0,1-1.41,0L19.8,17.31l-1.42,1.41,2.13,2.13a1,1,0,0,1,0,1.41,1,1,0,0,1-1.42,0l-.71-.71L17,20.14l-1.41,1.41L17,23a1,1,0,0,1,0,1.41,1,1,0,0,1-1.41,0L14.14,23a3,3,0,0,0,0-4.25A2.86,2.86,0,0,0,12.81,18a3,3,0,0,0-4.4-3.27,3,3,0,0,0-.63-1,3,3,0,0,0-4.24,0L1.41,11.65,0,13.07l2.13,2.12a3,3,0,0,0,0,4.24,3,3,0,0,0,2,.86,2.92,2.92,0,0,0,.85,2,3,3,0,0,0,2.1.87h0a2.74,2.74,0,0,0,.64-.08,2.83,2.83,0,0,0,.76,1.33,2.94,2.94,0,0,0,2.1.87,3.07,3.07,0,0,0,2.13-.87l1.42,1.41a3,3,0,0,0,4.24,0,2.85,2.85,0,0,0,.76-1.32,2.94,2.94,0,0,0,2.78-.8,3,3,0,0,0,.76-1.32,2.82,2.82,0,0,0,.65.08,3,3,0,0,0,2.13-5.12Zm-21.18,0L5,15.19A1,1,0,1,1,6.36,16.6L5,18a1,1,0,1,1-1.42-1.41Zm3.5,4.56a1,1,0,0,1-.71-.28,1,1,0,0,1,0-1.45L7.78,18h0L9.19,16.6a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.42l-1.4,1.39-.69.69h0l-.71.71A1.09,1.09,0,0,1,7.07,21.13ZM9.9,23a.94.94,0,0,1-.28-.71,1,1,0,0,1,.31-.74l1.38-1.38a1,1,0,0,1,1.42,1.41l-1.38,1.38A1,1,0,0,1,9.9,23Z"/>
								<path className="cls-1"
								      d="M10.73,6.71l-3,3,.7.7a5.25,5.25,0,0,0,3.71,1.46,5.25,5.25,0,0,0,3.71-1.46l2-2L16.43,7l-2,2a3.44,3.44,0,0,1-3.74.58l4.86-4.87h9l3.3-3.3L26.43,0l-2.7,2.71h-9l-2,2H6.55L1.85,0,.43,1.41l5.3,5.3Z"/>
							</g>
						</g>
					</svg>
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('diversity')}
					>Diversity, Equity &amp; Inclusion</button>
				</div>
				<section className={'content'}>
					<h4>Diversity, Equity <span className="stay-together">&amp; Inclusion</span></h4>
					<p>We lean on the variety of our colleagues’ perspectives and backgrounds to continuously challenge ourselves and to create a workplace that supports diversity, equity, and inclusion. Become part of the legacy that embraces our differences and enables us to provide the best care to patients from all over the world.</p>
					<LinkAway link={'/diversity'}/>
				</section>
			</div>
			<div className={classes('benefits')}>
				<div className={'button-holder'}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 28.1">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<g id="Layer_2-2" data-name="Layer 2">
									<path d="M11,0,0,2.2V16C0,23.61,10.19,27.77,10.63,28l.37.15.37-.15C11.81,27.77,22,23.61,22,16V2.2Zm9,16c0,5.52-7.26,9.12-9,9.91C9.26,25.15,2,21.55,2,16V3.84L11,2l9,1.8Z"/>
									<path d="M10,5V8H9.5a3.5,3.5,0,0,0,0,7h3a1.5,1.5,0,0,1,0,3H7v2h3v3h2V20h.5a3.5,3.5,0,0,0,0-7h-3a1.5,1.5,0,0,1,0-3H15V8H12V5Z"/>
								</g>
							</g>
						</g>
					</svg>
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('benefits')}
					>Benefits</button>
				</div>
				<section className={'content'}>
					<h4>Benefits</h4>
					<p>We lean on the variety of our colleagues’ perspectives and backgrounds to continuously challenge ourselves and to create a workplace that supports diversity, equity, and inclusion. Become part of the legacy that embraces our differences and enables us to provide the best care to patients from all over the world.</p>
					<LinkAway link={'/benefits'}/>
				</section>
			</div>
			<div className={classes('learning')}>
				<div className="button-holder">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 30">
						<g id="Layer_2" data-name="Layer 2">
							<g id="_32x32-Guides" data-name="32x32-Guides">
								<path className="cls-1"
								      d="M27.93,18.63,26,13.81V13A13,13,0,0,0,0,13c0,3.74,1,6.43,3.29,8.71l1,1,1.42-1.42-1-1C2.81,18.4,2,16.21,2,13a11,11,0,0,1,22,0v1a.94.94,0,0,0,.07.37L25.52,18H23v7a1,1,0,0,1-1,1H20v2h2a3,3,0,0,0,3-3V20h2a1,1,0,0,0,1-1A.94.94,0,0,0,27.93,18.63Z"/>
								<path className="cls-1"
								      d="M10,21a3,3,0,0,0-1.19-2.39A6.93,6.93,0,0,1,6,13a7,7,0,0,1,6-6.93V10h2V4H13A9,9,0,0,0,7.61,20.21,1,1,0,0,1,8,21v3H6v3a3,3,0,0,0,6,0V24H10Zm0,6a1,1,0,0,1-2,0V26h2Z"/>
								<path className="cls-1"
								      d="M22,11a3,3,0,0,0-3-3,3,3,0,0,0-3-3V7a1,1,0,0,1,1,1,2,2,0,0,0,2,2,1,1,0,0,1,0,2,2,2,0,0,0-2,2,1,1,0,0,1-2,0,2,2,0,0,0-4,0,1,1,0,0,1-1,1v2a3,3,0,0,0,3-3,3,3,0,0,0,6,0A3,3,0,0,0,22,11Z"/>
							</g>
						</g>
					</svg>
					<button className="btn-reset heading"
					        type={'button'}
					        onClick={() => setActive('learning')}
					>Learning Opportunities</button>
				</div>
				<section className={'content'}>
					<h4>Learning Opportunities</h4>
					<p>We lean on the variety of our colleagues’ perspectives and backgrounds to continuously challenge ourselves and to create a workplace that supports diversity, equity, and inclusion. Become part of the legacy that embraces our differences and enables us to provide the best care to patients from all over the world.</p>
					<LinkAway link={'/learning-opportunities'}/>
				</section>
			</div>
		</div>
	)
}