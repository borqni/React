import React from 'react'

const Recipe = ({ title, img, description, author, date }) => {
    return (
        <div className="recept">
            <h3>Recept 1</h3>
            <img src="https://m5.netinfo.bg/media/images/32740/32740173/960-540-hrana.jpg" />
            {/* <!-- <a className="info-link" href="#">виж рецептата ...</a> --> */}
        </div>

        // <div className="recept">
        //     <h3>{title}</h3>
        //     <img src={img} />
        //     {/* if isAuth */}
        //     <a className="info-link" href="#">виж рецептата ...</a>
        // </div>
    )
}

export default Recipe