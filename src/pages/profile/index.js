import React, { Component } from 'react'
import Post from '../../components/postCard'
import Recipe from '../../components/recipeCard'
// import '../../App.css'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: [],
            recipes: []
        }
    }

    getUser = async (id) => {

        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`)
        const user = await promise.json()

        console.log(user);
        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length,
            recipes: user.recipes && user.recipes.length
        })
    }

    // renderPosts() {
    //     const { posts } = this.state

    //     return posts.map(post => {
    //         return (
    //             <Post key={post._id} {...post} />
    //         )
    //     })
    // }

    componentDidMount() {
        this.getUser(this.props.match.params.userId)
    }


    render() {

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
}

export default Profile