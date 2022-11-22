import React, { useState } from "react"
import ActiveTags from "./ActiveTags"
import Listing from "./Listing"

export const TagContext = React.createContext()

export default function ListingsList({ listings }) {
	const [activeTags, setActiveTags] = useState([])

	function handleAddTag(tag) {
		const _activeTags = [...activeTags]
		if (_activeTags.includes(tag)) return
		_activeTags.push(tag)
		setActiveTags(_activeTags)
	}
	function handleDeleteTag(tag) {
		const _activeTags = [...activeTags]
		setActiveTags(_activeTags.filter((t) => t !== tag))
	}
	function handleClearTags() {
		setActiveTags([])
	}

	const tags = activeTags.length > 0
	let className = "listings"
	className += tags ? " translate" : ""

	return (
		<TagContext.Provider value={{ handleAddTag }}>
			<div className={className}>
				{activeTags.length > 0 && (
					<ActiveTags
						tags={activeTags}
						handleDelete={handleDeleteTag}
						handleClear={handleClearTags}
					/>
				)}
				{listings
					.filter((listing) => {
						const listing_tags = [
							...listing.languages,
							...listing.tools,
							listing.level,
							listing.role,
						]
						return (
							!tags || activeTags.some((at) => listing_tags.indexOf(at) >= 0)
						)
					})
					.map((listing) => {
						return <Listing key={listing.id} data={listing} />
					})}
			</div>
		</TagContext.Provider>
	)
}
