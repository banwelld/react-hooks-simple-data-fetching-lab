import React, { useState, useEffect } from 'react';

function App() {
	const [dogImg, setDogImg] = useState(null);
	const altText = "A Random Dog";

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
            .then(dog => setDogImg(dog.message));
	}, []);

	switch (dogImg === null) {
		case true:
			return <p>Loading...</p>
		case false:
        default:
			return <img src={dogImg} alt={altText} />
	};
};

export default App;