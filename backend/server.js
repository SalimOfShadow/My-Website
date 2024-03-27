const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './keys/keys.env' });
const PORT = process.env.PORT || 3000;
//MongoDB setup
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUsername}:${dbPassword}@salimcluster.2q5urv9.mongodb.net/?retryWrites=true&w=majority&appName=SalimCluster`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
	try {
		await mongoose.connect(uri);
		console.log(
			'Server pinged and response recieved! You are now connected to your cluster!'
		);
	} catch {
		console.log(
			'There was an error while connecting to your database,are the credentials correct?'
		);
	}
	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Starting the app :
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
