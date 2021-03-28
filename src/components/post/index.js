import React from 'react'

const Post = ({ title, img, description, author, date }) => {
    return (
        <div class="post">
            <img class="postImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpzkQ6ifPwwgGEjzB9l7dNHv_D33GnGHEvg&usqp=CAU" />
            <h4>Топ 30 на най-алкалните храни за човешкото здраве</h4>
            <p>публикувано на {date} от {author} </p>
            <a class="info-link" href="#">read more ...</a>
        </div>
    )
}

export default Post