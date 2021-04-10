import React from 'react'
import Post from '../../components/postCard'
import Recipe from '../../components/recipeCard'
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