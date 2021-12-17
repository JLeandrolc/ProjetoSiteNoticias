import React from 'react'
import { Link } from 'react-router-dom';


import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
			<Link to='/' className="item">
				<b>JORGE NEWS</b>
			</Link>
      
    <ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Sobre</a></li>
			<li><a href="/">Artigos</a></li>
			<li><a href="/">Estudos</a></li>
			<li><a href="/">Contato</a></li>
		</ul>

		</div>
    
	)
}

export default MenuHorizontal
