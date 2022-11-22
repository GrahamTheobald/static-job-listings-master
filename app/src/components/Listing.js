import React from "react"
import Info from "./Info"
import Tags from "./Tags"

export default function Listing({ data }) {
	const { new: isNew, languages, tools, level, role } = data
	let className = "listing"
	className += isNew ? " new" : ""
	return (
		<div className={className}>
			<Info data={data} />
			<Tags tags={[...languages, ...tools, level, role]} />
		</div>
	)
}
