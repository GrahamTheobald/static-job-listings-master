import React, { useState } from "react"
import ListingsList from "./ListingsList"
import Header from "./Header"
import data from "../assets/data.json"

function App() {
	const [listings, setListings] = useState(data)

	return (
		<div className='container'>
			<Header />
			<ListingsList listings={listings} />
		</div>
	)
}

export default App
