import React from 'react';
import './Blog.css';

const Blog = (props) => {
  const { blogImage, categoryName, title, userAvatar, userName, date } = props;
  return (
    <div className='blog'>
      <div className='blog__wrapper'>
        <div className='blog__imageWrapper'>
          <img src={blogImage} alt='' className='blog__image' />
        </div>
        <div className='blog__contentArea'>
          <p className='blog__category'>{categoryName}</p>
          <h2 className='blog__title'>{title}</h2>
          <div className='blog__footer'>
            <div className='blog__avatarWrapper'>
              <img src={userAvatar} alt='' className='blog__avatarImage' />
            </div>
            <div className=''>
              <p className='blog__author'>{userName}</p>
              <p className='blog__postedOn'>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
