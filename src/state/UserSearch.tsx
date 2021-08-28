import React, { useState } from 'react';

const users = [
	{ name: 'Ghani', age: 33 },
	{ name: 'Suriya', age: 32 },
	{ name: 'Airfan', age: 5 },
	{ name: 'Ali', age: 2 },
];

export const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const onClickHandler = () => {
		const foundUser = users.find((user) => user.name === name);
		if (!foundUser) console.log('user not found');
		setUser(foundUser);
	};

	return (
		<div>
			<h3>UserSearch</h3>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClickHandler}>Find user</button>
			<div>
				<h4>{user?.name && `Name: ${user?.name}`}</h4>
				<h4>{user?.age && `Age: ${user?.age}`}</h4>
			</div>
		</div>
	);
};
