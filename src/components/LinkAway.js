import React from 'react'

export const LinkAway = ({link, text = 'Read More'}) => (
	<a href={link} className="link-away">{text}</a>
)