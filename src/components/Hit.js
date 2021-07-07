import React from 'react'
import Hitslist from './Hitslist'
import './Hits.css'

function Hit({ name, image, ingredients ,url }){

	var leftImage = {
		backgroundImage: 'url('+image+')'
	}
    return(
    	<div className='hits-container'>
		<div className='left'>
		<div className='item-header'>
			<p className='hit-label' key={name}>
               {name}
			</p>
		</div>
		<div className='image-holder' style={leftImage}></div>			
		<div className='link-container'><a href={url}> Click to know more </a>
		</div>
		</div>
		<div className="right">
		<div className='ingredients-header'>
			<p>Ingredients</p>
		</div>
		<div className='ingredients'>

		<ul>
		{
			ingredients.map( ingredient => {
				return(
					<li className='ingredient-list'>{ingredient.text}</li>
					)
			})
		}
		</ul>
		</div>
		</div>
		</div>
		)	
}

export default Hit