import React, { Component } from 'react'
import Post from '../../components/postCard'
import Title from '../../components/title'

class Posts extends Component {
    render() {
        return (
            <section className="posts">
                <Title title="Статии:" />
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