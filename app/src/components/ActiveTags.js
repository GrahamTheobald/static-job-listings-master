import React from "react"
import Tag from "./Tag"

export default function ActiveTags({ tags, handleDelete, handleClear }) {
	return (
		<div className='active-tags'>
			<div className='active-tags__tags'>
				{tags.map((tag, index) => {
					return (
						<Tag
							id={index}
							label={tag}
							button={true}
							handleDelete={handleDelete}
						/>
					)
				})}
			</div>
			<p onClick={() => handleClear()} className='active-tags__clear'>
				Clear
			</p>
		</div>
	)
}
