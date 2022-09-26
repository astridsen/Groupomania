import React from 'react';
import profilPicture from '../../assets/bob-marley.jpeg'

const Profil = () => {
    return (
        <div class="bg-white shadow rounded-lg max-w-2xl md:mx-auto my-6 p-10">
            <div class="flex flex-col gap-1 text-center items-center">
                <img class="h-32 w-32 bg-white p-2 rounded-full shadow mb-1" src={profilPicture} alt="" />
                <button class="bg-gray-200 hover:bg-gray-400 text-grey-darkest hover:text-white hover:fill-white text-xs font-medium py-1 px-1 mb-4 rounded inline-flex items-center">
                    <svg class="w-2 h-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Upload picture</span>
                </button>
                <p class="font-semibold">John Doe</p>
                <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <button class="bg-gray-200 hover:bg-gray-400 text-grey-darkest hover:text-white hover:fill-white text-xs font-medium p-2 mb-4 rounded-full inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                </button>
                

                
            </div>
        </div>

    )
}

export default Profil;