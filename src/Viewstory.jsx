import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Viewstory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  const baseUrl ='https://my-json-server.typicode.com/rkvst/instagram-clone';
    

  useEffect(() => {
    fetch(`${baseUrl}/story/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("Fetched story:", data);
        setStory(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (id > tot || id <= 0) {
    navigate('/');
  }

  return (
    <div>
      {story ? (
        <div className="h-screen flex justify-center items-center gap-5">
          <Link to={`/story/${Number(id) - 1}/${tot}`}>
            <i className="bx bx-arrow-back text-3xl"></i>
          </Link>
          <img className="max-w-full h-auto rounded-lg" src={story.image} alt="story" />
          <Link to={`/story/${Number(id) + 1}/${tot}`}>
            <i className="bx bx-arrow-back bx-rotate-180 text-3xl"></i>
          </Link>
        </div>
      ) : (
        <p className="text-center mt-10">Loading...</p>
      )}
    </div>
  );
}

export default Viewstory;
