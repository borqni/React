import React from 'react'
import Post from '../post'
import Recipe from '../recipe'
// import '../../App.css'

const Profile = () => {
    return (
        <section >
            <p>Username: username</p>
            <p >Has recipes.length recipes </p>
            <Recipe />
            <p >Has posts.length posts </p>
            <Post />
        </section>
    )
}

export default Profile