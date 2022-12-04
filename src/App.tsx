import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Favorites from './src/pages/Favorites';
import Home from './src/pages/Home';

function App() {
	return (
		<div className='w-screen h-screen'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default App;
