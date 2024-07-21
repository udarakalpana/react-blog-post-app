import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {blogPosts} from "../../utlities/BlogsApi.jsx";

const Post = () => {
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(() => {
        setPost(blogPosts.find(post => post.id === parseInt(postId)))
    }, [postId]);

    return (
       <div className="w-2/4 m-auto mt-5 p-6">
           <h1 className="text-3xl font-bold">{post.blogTitle}</h1>

           <div className="border-t border-b p-1 mt-2 flex justify-between items-center">
               <div>
                   <img
                       className="w-10 h-10 rounded-full inline"
                       src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                       alt="created user avatar"/>
                   <p className='inline ml-3'>{post.createdBy}</p>
               </div>
               <div>
               <p>{post.createdAt}</p>
               </div>
           </div>

           <div>
               <p className='mt-5 text-justify'>{post.blogDescription}</p>
           </div>
       </div>
    );
};

export default Post;