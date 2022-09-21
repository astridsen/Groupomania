import React from 'react';
import logo from '../../assets/logo.png';

const signUp = () => {
  return (
    <div class="min-h-screen bg-red-500 flex justify-center items-start">
	<div class="absolute w-60 h-60 rounded-xl bg-red-200 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-red-200 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
            <img class="relative left-1 w-64" src={logo} alt="groupomanie-logo" />
			<h1 class="text-2xl font-bold text-center mb-4 cursor-pointer">Créer un compte</h1>
		</div>
		<div class="space-y-4">
            <input type="text" placeholder="Nom" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="text" placeholder="Prénom" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="text" placeholder="Adresse E-mail" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="text" placeholder="Mot de passe" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>
			<div class="text-center mt-6">
				<button class="py-3 w-64 text-xl text-white bg-red-500 rounded-2xl">Créer un compte</button>
			</div>
		</div>
		<div class="w-40 h-40 absolute bg-red-200 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-red-200 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
  );
};

export default signUp;