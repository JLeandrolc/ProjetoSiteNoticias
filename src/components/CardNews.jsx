import React from 'react'
import { Link } from 'react-router-dom';

import './CardNews.css'

function CardNoticia(props) {
	return (
		<div className="card-container">
			<Link to={props.idNoticia} className="title">
      <span className="author">{props.autor}</span>
				<span className="date">{props.date}</span>
				<h2>{props.titulo}</h2>
        <span className="descricao">{props.descricao}</span>
			</Link>
      
		</div>
	)
}

export default CardNoticia