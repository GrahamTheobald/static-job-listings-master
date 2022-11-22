import React from "react"
import New from "./New"
import Featured from "./Featured"

export default function Info({ data }) {
	const {
		company,
		logo,
		new: isNew,
		featured,
		position,
		postedAt,
		contract,
		location,
	} = data
	const src = require(`../assets${logo.slice(1)}`)
	return (
		<div className={"listing__info"}>
			<img className='listing__info__logo' src={src} alt='logo' />
			<div className='listing__info__text'>
				<div className='listing__info__text__top'>
					<p>{company}</p>
					{isNew && <New />}
					{featured && <Featured />}
				</div>
				<p className='listing__info__text__role'>{position}</p>
				<div className='listing__info__text__bottom'>
					<p>{postedAt}</p>
					<p className='divider' />
					<p>{contract}</p>
					<p className='divider' />
					<p>{location}</p>
				</div>
			</div>
		</div>
	)
}
