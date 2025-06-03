import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {
    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const[unfollowed,setUnfollowed]=useState(0);
    
     const baseUrl =
      import.meta.env.MODE === 'development'
        ? 'http://localhost:3000'
        :  'https://my-json-server.typicode.com/rkvst/instagram-clone';


    useEffect(() => {
        // axios.get('http://localhost:3000/profile')
            axios.get(`${baseUrl}/profile`)
            .then(data => setProfile(data.data))
            .catch(err => console.log(err))

        // axios.get('http://localhost:3000/followers')
            axios.get(`${baseUrl}/followers`)
            .then(data => setFollowers(data.data))
            .catch(err => console.log(err))
    }, [unfollowed])

    function handleonchange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // const handleupdate = async () => {
    //     axios.put('http://localhost:3000/profile', profile)
    //         .then(alert("updated"))
    //         .catch(err => console.log(err))
    //     }
     const handleupdate = async () => {
        if (import.meta.env.MODE === 'development') {
          try {
            await axios.put(`${baseUrl}/profile`, profile);
            alert("Updated");
          } catch (err) {
            console.log(err);
          }
        } else {
          alert("Update not available in deployment (read-only API)");
        }
      }; 

    //  const handleUnfollow=async(id)=>{
    //     axios.delete(`http://localhost:3000/followers/${id}`)
    //     .then(alert("UnFollowed"))
    //     .then(setUnfollowed(!unfollowed))
    //     .catch(err=>console.log(err))
    //  }   
    const handleUnfollow = async (id) => {
        if (import.meta.env.MODE === 'development') {
          try {
            await axios.delete(`${baseUrl}/followers/${id}`);
            alert("Unfollowed");
            setUnfollowed(!unfollowed);
          } catch (err) {
            console.log(err);
          }
        } else {
          alert("Unfollow not available in deployment (read-only API)");
        }
      }; 

    return (
        <div className='m-10 '>
            {profile ? (
                <div>
                    <img className='w-[100px] h-[100px] rounded-full object-cover' src={profile.profilePic} alt="" />
                    <h5 className='ml-2'>{profile.username}</h5>
                    <div className='flex flex-col w-full md:w-1/2 '>
                        <input type="text"
                            value={profile.username}
                            name='username'
                            className='"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" my-4 '
                            onChange={handleonchange}
                        />

                        <input type="text"
                            value={profile.profilePic}
                            name='profilePic'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            onChange={handleonchange}
                        />
                    </div>
                    <button onClick={handleupdate} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4'>
                        Update
                    </button>
                </div>
            ) : (
                <div>Loading profile</div>
            )}
            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='flex my-2 w-1/2 '>
                      {follower.username}
                      <button onClick={()=>{handleUnfollow(follower.id)}}className=' bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-auto'>Un Follow</button>
                    </div>
                ))
            ) : (
                <div>
                    Loading Followers
                </div>
            )}

        </div>
    )
}

export default Profile
