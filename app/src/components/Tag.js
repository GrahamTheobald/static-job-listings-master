import React from "react"
import remove from "../assets/images/icon-remove.svg"

export default function Tag({ label, button = false }) {
	return (
		<div className='tag'>
			<div className='tag__label'>{label}</div>
			{button && (
				<div className='tag__button'>
					<img src={remove} alt='remove tag' />
				</div>
			)}
		</div>
	)
}
