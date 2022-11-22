import React from "react"
import Tag from "./Tag"

export default function Tags({ tags }) {
	return (
		<div className='listing__tags'>
			{tags.map((tag, index) => {
				return <Tag key={index} label={tag} />
			})}
		</div>
	)
}
