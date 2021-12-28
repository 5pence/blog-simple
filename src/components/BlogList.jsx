import React from 'react'
import BlogDetail from './BlogDetail'

const BlogList = ({blogposts, deleteBlogPost}) => {

    return (
        <div>
            {
                blogposts.map(blogpost => <BlogDetail deleteBlogPost={deleteBlogPost} key={blogpost.id} blogpost={blogpost}/>)                                  
            }
        </div>
    )
}

export default BlogList
