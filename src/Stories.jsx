import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Stories() {

  const [stories, setStories] = useState([])
  const navigate = useNavigate();
  let tot = 0;


  // useEffect(() => {
  //   fetch('http://localhost:3000/story')
  //     .then(data => data.json())
  //     .then(data => setStories(data))
  //     .catch(err => console.log(err))
  // },[])

   const baseUrl ='https://my-json-server.typicode.com/rkvst/instagram-clone';
  

    useEffect(() => {
      fetch(`${baseUrl}/story`)
        .then(res => res.json())
        .then(data => setStories(data))
        .catch(err => console.error('Failed to load stories:', err));
    }, []);
    
  return (
    <div className=' h-[60px] flex justify-center items-center space-x-6 p-10'>
      <div className='hidden'>
        {tot = stories.length}
      </div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} onClick={() => { navigate(`/story/${story.id}/${tot}`) }}>
            <div className='bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px] rounded-full'>
              <img className='w-[40px] h-[40px] rounded-full object-cover' src={story.profilePic} alt="profilepic" />
            </div>

            <p className='truncate w-[40px]'>{story.username}</p>

          </div>
        ))
      ) : (
        <p>Loading</p>
      )}

    </div>
  )
}

export default Stories
