import React from 'react'

const BlogDetail = ({blogpost, deleteBlogPost}) => {
    console.log("yo")
    console.log(blogpost)

    return (
        <div>
            <h1>here {blogpost.title}</h1> 
            <img src={blogpost.imageUrl} alt={blogpost.title} />
            <p>{blogpost.description}</p>
            <button onClick={() => deleteBlogPost(blogpost.id)}>delete blogpost</button>
        </div>
    )
}

export default BlogDetail