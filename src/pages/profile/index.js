import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Post from '../../components/postCard'
import Recipe from '../../components/recipeCard'
// import '../../App.css'
import UserContext from '../../Context'

const Profile = () => {
    const [username, setUsername] = useState(null)
    const [posts, setPosts] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    const getData = useCallback(async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        } else {
            const user = await response.json()
            setUsername(user.username)
            setPosts(user.posts && user.posts.length)
        }
    }, [params.userid, history])

    useEffect(() => {
        getData()
    }, [getData])

    if (!username) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <section >
            <p>Username: {username}</p>
            <p >Has recipes.length recipes </p>
            <Recipe />
            <p >Has posts.length posts </p>
            <Post />
        </section>
    )
}

export default Profile