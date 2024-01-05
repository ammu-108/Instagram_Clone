import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';


function Suggestions() {
  return <div className='suggestions'>
    <div className='suggestions__title'>Suggestions for you</div>
      <div className='suggestions__usernames'>


        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>🌻</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>mani</span>
              <span className='relation'>Followed by Niharika</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>


        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>💕</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Nikki</span>
              <span className='relation'>Followed by priyanka</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

          
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>🤗</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Geetha_2909</span>
              <span className='relation'>Followed by Pavan</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

          
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>🎷</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>XoXo</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

          
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>⚽️</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Qulin</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

          
        </div>
      </div>
  </div>
}

export default Suggestions;