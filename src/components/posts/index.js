import React, { Component } from 'react'
import Post from '../postCard'

class Posts extends Component {
    render() {
        return (
            <section className="posts">
                <h1>Статии:</h1>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        )
    }
}

export default Posts