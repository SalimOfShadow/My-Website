const logout = async () => {
	try {
		const response = await fetch('http://localhost:3001/logout', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			credentials: 'include',
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data.message);
		} else {
			const data = await response.json();
			console.log(data.message);
		}
	} catch (err) {
		console.log(err);
	}
};

export { logout };
