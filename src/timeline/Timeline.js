import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './posts/Post';



function getAvatarForUser(user) {
  // Add your logic to determine the avatar based on the user
  // For simplicity, I'm using a switch statement here, but you can use any logic you want
  switch (user.toLowerCase()) {
    case 'ammu':
      return '🦋';
    case 'durga':
      return '🥰';
    case 'devi':
      return '💕';
    case 'charan':
      return '😘';
    // Add more cases as needed for different users
    default:
      return '👤'; // Default avatar
  }
}




function Timeline() {
  const [posts , setPosts] = useState([
    {
      user: "ammu",
      postImage: "/pic1.jpg",
      likes : 50,
      timestamp:"5d",
    },
    {
      user: "durga",
      postImage:"/img.jpg",
      likes : 26,
      timestamp:"3min",
    },
    {
      user: "devi",
      postImage: "/pic3.jpg",
      likes : 20,
      timestamp:"7d",
    },
    {
      user: "charan",
      postImage: "/pic7.jpg",
      likes : 38,
      timestamp:"6d",
    },
  ]);



  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {posts.map(post =>(
            <Post 
              key={post.user}
              user={post.user} 
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp}
              avatar={getAvatarForUser(post.user)}
            />
          ))}
        </div>
      </div>
      <div className='timeine__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline;