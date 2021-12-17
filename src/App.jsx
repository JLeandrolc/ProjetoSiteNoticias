import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import NewsDetails from './components/NewsDetails'
import MenuHorizontal from './components/MenuHorizontal'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<div>
				<MenuHorizontal />
				<Routes>
					<Route path='/' element={<News />} />
					<Route path=':idNoticia' element={<NewsDetails />} />
				</Routes>
        <Footer />
			</div>
		</BrowserRouter>

	);
}

export default App;