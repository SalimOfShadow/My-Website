const isLogged = async () => {
	try {
		const response = await fetch('http://localhost:3001/protected', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			credentials: 'include',
		});
		if (response.ok) {
			console.log('You are logged in!');
			return true;
		} else {
			console.error('Something went wrong when trying to access this route');
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export { isLogged };
