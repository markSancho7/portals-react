import React, { useState, useEffect } from 'react';

const Pictures = () => {
	const [number, setNumber] = useState(0); // Initialize state with a default value
	const gender = ['men', 'women'];
	const newNumberGender = Math.floor(Math.random() * 2);
	useEffect(() => {
		const newNumber = Math.floor(Math.random() * 20);
		setNumber(newNumber);
	}, []); // Empty dependency array ensures this effect runs only once after mount

	const route = `https://randomuser.me/api/portraits/med/${gender[newNumberGender]}/${number}.jpg`;

	return <img src={route} alt='' />;
};

export default Pictures;
