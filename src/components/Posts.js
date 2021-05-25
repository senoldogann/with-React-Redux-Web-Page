import React, { Component } from 'react'
import {connect} from "react-redux";
import Pokeball from '../ball.png';
import {deletePost} from "../actions/deleteAction";
 class Posts extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        setTimeout(() => {
        // Anasayfaya geri dön
        this.props.history.push("/")
        }, 2000);
    }

    render() {

        const post = this.props.post ? (
            <div class="card">
            <h5 class="card-header">POST</h5>
            <div class="card-body">
            <img className="card-img-top" style={{width:"150px",marginBottom:"15px"}} src={Pokeball} alt="Card image cap" />
                <h5 class="card-title">{this.props.post.title}</h5>
                <p class="card-text">{this.props.post.body}</p>
                <button className="btn btn-danger" onClick={this.handleClick}>DELETE POST</button>
            </div>
            </div>
        ) : (<div className="center">Loading Post...</div>)

        return (
            <div>
                {post}
            </div>
        )
    }
}





const mapStateToProps = (state,ownProps) => {
    let id =  ownProps.match.params.post_id
    return {
      post:state.posts.find(post => post.id === id )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost:(id) => dispatch(deletePost(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts);
