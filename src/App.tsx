import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Favorites from './src/pages/Favorites';
import Home from './src/pages/Home';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	);
}

export default App;
