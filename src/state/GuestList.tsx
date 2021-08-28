import React, { useState } from 'react';

export const GuestList: React.FC = () => {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);

	const onClickHandler = () => {
		setName('');
		setGuests([...guests, name]);
	};

	return (
		<div>
			<h3>Guest List</h3>
			<ul>
				{guests?.map((guest, i) => (
					<li key={i}>{guest}</li>
				))}
			</ul>

			<input value={name} onChange={(e) => setName(e.target.value)} />

			<button onClick={onClickHandler}>Add a new Guest</button>
		</div>
	);
};
