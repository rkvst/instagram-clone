import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {

  const[profile,setProfile]=useState(null);
  const[Suggestions,setSuggestions]=useState([]);
  const[isfollowing,setFollowing]=useState(false);

  // useEffect(()=>{
  //     fetch('http://localhost:3000/profile').
  //     then(data=>data.json()).
  //     then(data=>setProfile(data)).
  //     catch(err=>console.log(err)
  //   )
  //    fetch('http://localhost:3000/suggestions').
  //     then(data=>data.json()).
  //     then(data=>setSuggestions(data)).
  //     catch(err=>console.log(err)
  //   )

  // },[])

  // const handlefollow=async(id,username)=>{
  //   axios.post('http://localhost:3000/followers',{"id":id,"username":username})
  //   .then(alert('Followed'))
  //   .catch(err=>console.log(err))
  // }
    const baseUrl ='https://my-json-server.typicode.com/rkvst/instagram-clone';

  useEffect(() => {
    fetch(`${baseUrl}/profile`)
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch(`${baseUrl}/suggestions`)
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);

  const handlefollow = async (id, username) => {
    if (import.meta.env.MODE === 'development') {
      axios
        .post(`${baseUrl}/followers`, { id: id, username: username })
        .then(() => alert('Followed'))
        .catch((err) => console.log(err));
    } else {
      alert('Follow action is disabled in deployment (read-only API)');
    }
  };
  
  return (
    <div>
      <div className='w-full md:w-[70%] m-5'>
         {profile ?
      <div className='flex '>
        <img className='rounded-full w-[24px] h-[24px] object-cover ' src={profile.profilePic} alt="profilePic" />
        <h5 className='ml-2'>{profile.username}</h5>
         <small className='ml-auto text-sky-600'>Switch</small>
      </div>
      :<p>Loading</p>}
      <div className='flex mt-10'>
        <p className='text-sm'>Suggested for you</p>
        <b className='ml-auto text-sm'>See All</b>
      </div>
       {Suggestions.length>0 ?(
        <div>
            {Suggestions.map((suggestion)=>(
                <div className='my-3'key={suggestion.id}>
                    <div className='flex mt-5'>
                        <img className='rounded-full w-[24px] h-[24px] object-cover 'src={suggestion.profilePic} alt="profilePic" />
                        <h5 className='ml-2'>{suggestion.username}</h5>
                        <a onClick={()=>{handlefollow(suggestion.id,suggestion.username)}}className='ml-auto text-sm text-sky-600 cursor-pointer'>
                           Follow
                        </a>
                    </div>       
                </div>
            ))}
        </div>
      ):(
        <div>
            Loading
        </div>
      )}
      </div>
    </div>
  )
}

export default Suggestions
