import React, { Component } from 'react'

export class AddBlogPost extends Component {

    state = {
        title: "",
        imageUrl: "",
        description: ""
    }

    handleChange = (event) => {
        console.log(event)
        // we spread this state using the name attribute values on form to entered value
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        })
    }    

    handleSubmit = (event) => {
        // prevent default action of form clearing
        event.preventDefault();
        // connecting and firing arrow function on parent class 
        this.props.addBlogDetail(this.state)
        // to reset form
        this.setState({
            title: "",
            imageUrl: "",
            description: ""
        })
    }

    render() {
        return (
            <div>
                <h1 className='center-heading'>Add Blog Post</h1>
                <form className='blog-form' onSubmit={this.handleSubmit}>
                    <input value={this.state.title} 
                            onChange={this.handleChange} 
                            type="text" 
                            name="title"  
                            placeholder='title'/><br />
                    <input value={this.state.imageUrl} 
                            onChange={this.handleChange} 
                            type="text" 
                            name="imageUrl"  
                            placeholder='imageUrl (full url please)'/><br />
                    <textarea value={this.state.description} 
                                onChange={this.handleChange} 
                                type="text" 
                                name="description" 
                                placeholder='description...'
                                rows='20'
                                cols='80' /><br />
                    <button className='submit-button'>Add Blog</button>
                </form>
           </div>
        )
    }
}

export default AddBlogPost
