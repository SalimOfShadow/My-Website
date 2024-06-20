async function handleResponse(response, status, callback) {
	const data = await response.json();
	const message = data.message;
	const className = status === 'success' ? 'true' : 'false';
	setTimeout(() => {
		callback({ message, className });
	}, 400);
}

export { handleResponse };
