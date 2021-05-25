import React, { Component } from 'react'
import Pokeball from '../ball.png';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
    render() {
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div class="card mt-5" key={post.id}>
                    <h5 class="card-header">POST {post.id}</h5>
                    <div class="card-body">
                    <img className="card-img-top" style={{width:"150px",marginBottom:"15px"}} src={Pokeball} alt="Card image cap" />
                        <Link to={'/' + post.id}>
                        <h5 class="card-title">{post.title}</h5>
                        </Link>
                        <p class="card-text">{post.body}</p>
                        <div ></div>
                        
                    </div>
                    </div>
                )
            })
        ) : (<div>No Post to show</div>)
        return (
            <div className="container mt-5">
                <h3 className="text-center">Home</h3>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);