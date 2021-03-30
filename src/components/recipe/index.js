import React from 'react'

const Recipe = ({ title, img, description, author, date }) => {
    return (
        <div class="recept">
            <h3>Recept 1</h3>
            {/* <p>написана от {author} на {date}</p> */}
            <img src="https://m5.netinfo.bg/media/images/32740/32740173/960-540-hrana.jpg" />
            <a class="info-link" href="#">виж рецептата ...</a>
            {/* 
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={img} />
            <p>{description}</p> */}
        </div>
    )
}

export default Recipe