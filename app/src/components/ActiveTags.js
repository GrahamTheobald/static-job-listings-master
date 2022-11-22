import React from "react"
import Tag from "./Tag"

export default function ActiveTags({ tags }) {
	return (
		<div className='active-tags'>
			<div className='active-tags__tags'>
				{tags.map((tag, index) => {
					return <Tag id={index} label={tag} button={true} />
				})}
			</div>
			<p className='active-tags__clear'>Clear</p>
		</div>
	)
}
