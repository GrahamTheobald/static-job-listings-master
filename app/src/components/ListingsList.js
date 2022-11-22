import React, { useState } from "react"
import ActiveTags from "./ActiveTags"
import Listing from "./Listing"

export default function LintingsList({ listings }) {
	const [activeTags, setActiveTags] = useState([])
	const tags = activeTags.length > 0
	let className = "listings"
	className += tags ? " translate" : ""
	return (
		<div className={className}>
			{activeTags.length > 0 && <ActiveTags tags={activeTags} />}
			{listings.map((listing) => {
				return <Listing key={listing.id} data={listing} />
			})}
		</div>
	)
}
