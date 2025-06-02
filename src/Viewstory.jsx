import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
function Viewstory() {
    const { id,tot} = useParams();

    const [Story, setStory] = useState(null);
    const navigate=useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
            .then(data => data.json())
            .then((data) => {
        console.log("Fetched story:", data); // ✅ Debug
        setStory(data);
      })
            .catch(err => console.log(err))
    }, [id])

    if(id>tot || id<=0){
       navigate('/');
    }
    return (
        <div>
            {Story ? (
                <div className='h-screen flex justify-center items-center'>
                    <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className='bx bx-arrow-back'></i></Link>
                 <img className='max-w-full h-auto' src={Story.image} />
                      <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class='bx bx-arrow-back bx-rotate-180'></i></Link>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    )
}

export default Viewstory
