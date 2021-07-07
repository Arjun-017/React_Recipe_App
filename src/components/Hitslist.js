import React from 'react'
import Hit from './Hit'
import './Hits.css'

function Hitslist({ hits }) {

    return(
        <>
        <h1 className='search-header'>Search results : </h1>

        <div className='search-results'>
    	{
            hits.map(hit => {
    		return <Hit name={hit.recipe.label} key={hit.recipe.label} image={hit.recipe.image} ingredients={hit.recipe.ingredients} url={hit.recipe.url} />
    	    })
        }
    	</div>
        </>
    	)
}

export default Hitslist