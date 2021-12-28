import React, { Component } from 'react';
import './App.css';
import AddBlogPost from './components/AddBlogPost';
import BlogList from './components/BlogList';

export class App extends Component {

  state = {
    blogposts: [
      { id: 1, 
        title: 'A stunning place to live', 
        imageUrl: "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg", 
        description: "One of the primary purposes" 
      },
      { id: 1, 
        title: 'A stunning place to live 2', 
        imageUrl: "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg", 
        description: "Two of the primary purposes" }
    ]
  }

  
  addBlogDetail = (blogpost) => {
    const myBlogPost = {
      // to get unique id retrieve milliseconds since epoch
      id: new Date().getTime(),
      title: blogpost.title,
      imageUrl: blogpost.imageUrl,
      description: blogpost.description
    }
    // add new blogpost to state array
    this.setState({
      blogposts: [...this.state.blogposts, myBlogPost]
    })
  }

  deleteBlogPost = (id) => {
    // using filter to get only the blogpost objects that we don't want to delete
    const filteredBlogPosts = this.state.blogposts.filter(blogpost => blogpost.id !== id)
    // and setting state of updated list thus deleting one
    this.setState({ blogposts: filteredBlogPosts })
  }

  render() {
    console.log(typeof(this.state.blogposts))
    return (
      <div className='site-container'>
        <AddBlogPost addBlogDetail={this.addBlogDetail} />
        {this.state.blogposts.length > 0 ? <BlogList blogposts={this.state.blogposts} 
                                                 deleteBlogPost={this.deleteBlogPost} /> : <p>no todos available</p>}
                            
      </div>
    )
  }
}

export default App

