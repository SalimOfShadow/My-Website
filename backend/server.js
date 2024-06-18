const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './keys/keys.env' });
dotenv.config({ path: './keys/ssl.env' });

const PORT = process.env.PORT || 3001;
const routes = require('./routes/routes');

// Express-session setup :

const session = require('express-session');
const MongoStore = require('connect-mongo');

// Initialize express session

const mongoOptions = {
	dbUsername: process.env.DB_USERNAME,
	dbPassword: process.env.DB_PASSWORD,
	dbName: 'SalimWebsite',
	uri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@salimcluster.2q5urv9.mongodb.net/SalimWebsite?retryWrites=true&w=majority&appName=SalimCluster`,
};

// MongoDB setup :

const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
	try {
		await mongoose.connect(mongoOptions.uri);
		console.log(
			'Server pinged and response recieved! You are now connected to your cluster!'
		);
	} catch {
		console.log(
			'There was an error while connecting to your database,are the credentials correct?'
		);
	}
}

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
};

app.use(cors(corsOptions));
app.use(
	session({
		secret: 'supersecretpassword',
		resave: false,
		saveUninitialized: false,
		rolling: true,
		store: MongoStore.create({
			client: mongoose.connection.getClient(),
			secret: 'supersecretpassword',
			clearExpired: true,
			checkExpirationInterval: 1000 * 10, // 10 sec
		}),
		cookie: {
			secure: false, // Set secure option to false
			maxAge: 1000 * 60 * 60, // 1 min
		},
	})
);

app.use(express.json());
app.use('/', routes);

//Starting the app :
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
