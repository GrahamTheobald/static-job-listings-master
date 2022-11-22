import React from "react"
import remove from "../assets/images/icon-remove.svg"

export default function Tag(props) {
	const {
		label,
		handleDelete = () => null,
		handleAdd = () => null,
		button = false,
	} = props
	return (
		<div className='tag'>
			<div onClick={() => handleAdd(label)} className='tag__label'>
				{label}
			</div>
			{button && (
				<div onClick={() => handleDelete(label)} className='tag__button'>
					<img src={remove} alt='remove tag' />
				</div>
			)}
		</div>
	)
}
