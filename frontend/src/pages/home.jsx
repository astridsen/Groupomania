import React from 'react';
import Navbar from '../components/navbar';
import CreatePost from '../components/createPost';
import Post from '../components/post';

const Home = () => {
  return (
    <div>
      <div class="min-h-screen bg-red-200 justify-center items-start">
	      <div class="absolute w-60 h-60 rounded-xl bg-red-500 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-red-500 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <Navbar />
      <CreatePost />
      <Post />
      </div>
    </div>
  );
};

export default Home;
