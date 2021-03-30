import React, { Component } from 'react'
import Post from '../post'

class Posts extends Component {
    render() {
        return (
            <section class="posts">
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