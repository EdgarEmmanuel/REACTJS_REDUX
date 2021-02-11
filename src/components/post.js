import React from 'react';
import '../css/post.css';
import PropTypes from 'prop-types';
import { connect  } from 'react-redux';
import { fetchPosts } from '../reducers/actions/postActions';


class Post extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    componentDidUpdate(){
        if(this.props.newPost){
            this.props.posts.push(this.props.newPost);
        }
    }
    
    render(){
        return (
            this.props.posts.map(post=>(
                <div className="post" key={post.id}>
                    <small>{post.id}</small>
                  <h3>{post.title}</h3>
                  <h4>{post.body}</h4>
                </div>
            ))
        )
    }
}

// required the props for the component 
Post.propTypes = {
    //required
    fetchPosts : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,

    //optional
    newPost: PropTypes.object
}


const mapStateToProps = state => (
    {
        /**
         * go check the rootReducer file 
         */
        posts: state.posts.items,
        newPost : state.posts.item
    }
)

export default connect(mapStateToProps,{ fetchPosts })(Post);