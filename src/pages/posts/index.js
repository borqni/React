import React, { Component } from 'react'
import Post from '../../components/postCard'
import Title from '../../components/title'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    getPosts = async () => {
        const { length } = this.props
        const promise = await fetch(`http://localhost:9999/api/post?length=${length}`)
        const posts = await promise.json()

        this.setState({
            posts
        })
    }

    renderPosts() {
        const { posts } = this.state

        return posts.map(post => {
            return (
                <Post key={post._id} {...post} />
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }


    render() {
        return (
            <section className="posts">
                <Title title="Статии:" />
                {this.renderPosts()}
            </section>
        )
    }
}

export default Posts