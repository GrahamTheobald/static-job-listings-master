import React, { useContext } from "react"
import Tag from "./Tag"
import { TagContext } from "./ListingsList"

export default function Tags({ tags }) {
	const { handleAddTag } = useContext(TagContext)
	return (
		<div className='listing__tags'>
			{tags.map((tag, index) => {
				return <Tag key={index} label={tag} handleAdd={handleAddTag} />
			})}
		</div>
	)
}
