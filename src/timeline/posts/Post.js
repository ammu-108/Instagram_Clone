import "./Post.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FavoriteBorder } from '@mui/icons-material';
import { ChatBubbleOutline } from '@mui/icons-material';
import { Telegram } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';
import React, { useState } from 'react';


function Post({user, postImage , likes , timestamp , avatar}) {

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
        <div className='post__header'>
          <div className='post__headerAuthor'>
            <span className='avatar'>
              <Avatar>{avatar}</Avatar>
            </span>
            {user} • {"   "}  <span>{timestamp}</span> 
          </div>
          <MoreHorizIcon />
        </div>
        <div className='post__image'>
          <img src={postImage} alt=""/>
        </div>
        <div className='post__footer'>
          <div className='post__footerIcons'>
            <div className='post__iconsMain'>
              <FavoriteBorder
              className={`postIcon ${isLiked ? 'liked' : ''}`}
              onClick={handleLikeClick}
              />
              <ChatBubbleOutline className='postIcon' />
              <Telegram className='postIcon' />
            </div>
            <div className='post__iconSave'>
              <BookmarkBorder className='postIcon' />
            </div>  
          </div>
          <p className={`likes ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
          {isLiked ? likes + 1 : likes} more people likes this post.
          </p>
        </div>
    </div>
  )
}

export default Post;