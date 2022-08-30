import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import './Blogs.css';
import DATA from './data.json';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(DATA);
  }, []);

  return (
    <div className='blogs'>
      <div className='container'>
        <div className='blogs__wrapper'>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blogImage={blog.blogImage}
              categoryName={blog.categoryName}
              title={blog.title}
              userAvatar={blog.userAvatar}
              userName={blog.userName}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
