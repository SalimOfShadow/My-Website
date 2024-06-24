import React from 'react';
import {
	BrowserRouter,
	Switch,
	Routes,
	Route,
	Link,
	Navlink,
} from 'react-router-dom';
import {
	About,
	Login,
	Register,
	Forgot,
	ChangePassword,
	ProtectedRoute,
	Home,
	WIP,
} from './pages';
import UserVerified from './pages/UserVerified';
import FormTitle from './components/form-components/FormTitle';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<WIP />}></Route>
				<Route path="/wip" element={<WIP />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/forgot" element={<Forgot />}></Route>
				<Route
					path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/user-verification/:id/:token"
					element={<UserVerified />}
				></Route>
				<Route
					path="/reset-password/:id/:token"
					element={<ChangePassword />}
				></Route>
				<Route
					path="/protected"
					element={
						<ProtectedRoute>
							<div>
								<FormTitle title="Protected Page"></FormTitle>
							</div>
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
