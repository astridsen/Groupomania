import React from 'react';
import profilPicture from '../assets/bob-marley.jpeg'

const Post = () => {
   return (
      <div class="bg-white shadow rounded-lg max-w-2xl md:mx-auto mb-6">
      <div class="flex flex-row px-2 py-3 mx-3">
          <div class="w-auto h-auto rounded-full">
              <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={profilPicture}/>
          </div>
          <div class="flex flex-col mb-2 ml-4 mt-1">
              <div class="text-gray-600 text-sm font-semibold">John Doe</div>
              <div class="flex w-full mt-1">
                  <div class="text-gray-400 font-thin text-xs">
                      30 seconds ago
                  </div>
              </div>
          </div>
      </div>
      <div class="border-b border-gray-100"></div> 
          <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                    <img class="rounded w-96 md:mx-auto" src={profilPicture} alt=""/>
         </div>
      <div class="text-gray-500 text-sm mb-6 mx-3 px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
      <div class="flex justify-start mb-4 border-t border-gray-100">
          <div class="flex justify-end w-full mt-1 pt-2 pr-5">
              <span class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                  <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
              </span>
          </div>
      </div>
      <div class="text-black p-4 antialiased flex">
          <img class="rounded-full h-8 w-8 mr-2 mt-1 " src={profilPicture} alt="" />
          <div>
              <div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                  <div class="font-semibold text-sm leading-relaxed">Sara Lauren</div>
                  <div class="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </div>
          </div>
      </div>
      <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
          <img class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src={profilPicture}/>
          <span class="absolute inset-y-0 right-0 flex items-center pr-6">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
              <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              </button>
          </span>
              <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" placeholder="Post a comment..." autocomplete="off"/>
      </div>
  </div>
   )
}

export default Post;