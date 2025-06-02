import React, { useEffect, useState } from 'react'

function Posts() {

    const[posts,setPosts]=useState([]);
    // const[liked,setLiked]=useState(false);
    const [likedPosts, setLikedPosts] = useState({});

const toggleLike = (postId) => {
  setLikedPosts(prev => ({
    ...prev,
    [postId]: !prev[postId]
  }));
};

    useEffect(()=>{
        fetch('http://localhost:3000/posts').
        then((data)=>data.json()).
        then(data=>setPosts(data)).
        catch(err=>console.log(err))
    },[])

  return (
    <div className='flex flex-col items-center sm:items-stretch'>
  {posts.length > 0 ? (
    <div className="w-full">
      {posts.map((post) => (
        <div className="mt-3 mb-1 w-full px-2 sm:px-3 sm:max-w-[500px]" key={post.id}>
          <div className="flex mt-5 items-center">
            <img className="rounded-full w-[24px] h-[24px] object-cover" src={post.profilePic} alt="profilePic" />
            <h5 className="ml-2">{post.username}</h5>
          </div>
          <img className="mt-2 w-full rounded object-cover" src={post.image} alt="post" />
          <div className="flex gap-3 text-xl mt-2">
            <i   onClick={() => toggleLike(post.id)}className={`bx ${likedPosts[post.id] ? "bxs-heart text-red-500" : "bx-heart text-gray-500 hover:text-red-500"} transition-all duration-300`}/>
            <i className="bx bxs-message-rounded text-blue-500"></i>
            <i className="bx bx-send"></i>
          </div>
          <div>
            <b>{post.likes + (likedPosts[post.id] ? 1 : 0)} Likes</b>
          </div>
          <p className='mb-1'>{post.caption}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>loading posts</div>
  )}
</div>

  )
}

export default Posts
