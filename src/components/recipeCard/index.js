import React from 'react'

const Recipe = ({ title, img, description, author, date }) => {
    return (
        <div className="recept">
            <h3>{title}</h3>
            <img src={img} />
            {/* if isAuth */}
            <a className="info-link" href="#">виж рецептата ...</a>
        </div>
    )
}

export default Recipe