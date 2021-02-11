import React from 'react';
//import ax from '../services/getAxios';
import '../css/postForm.css';
//import Post from '../models/Post';
import { connect  } from 'react-redux';
import {createPost} from '../reducers/actions/postActions';
import PropTypes from 'prop-types';

class Post_Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            body:"",
            message:""
        }
    }
    

    onTitleChange = (e) => {
        e.preventDefault();
        this.setState({title:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title==="" || this.state.body===""){

            this.setState({message:"Tous les champs sont obligatoires"});

        }else{
            /**
             * create the instance of the object
             */
             this.props.createPost(this.state.title,this.state.body)

             /**
              * empty the field
              */
             this.setState({body:""});
             this.setState({title:""});
        }
    }

    onBodyChange = (e) =>{
        e.preventDefault();
        this.setState({body:e.target.value});
    }

    render(){

        return (
            <div className="postForm" onSubmit={this.onSubmit}>
                <form >
                    <input type="text" onChange={this.onTitleChange}  placeholder="title"/>
                    <input type="text" onChange={this.onBodyChange}  placeholder="body"/>
                    <input type="submit" value="send" />
                    <h2>{this.message}</h2>
                </form>
            </div>
        )
    }
}

Post_Form.propTypes = {
    createPost : PropTypes.func.isRequired,
}

// const mapStateToProps = state => {

// }

export default connect(null,{createPost})(Post_Form);