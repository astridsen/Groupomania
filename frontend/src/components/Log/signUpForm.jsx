import React, { useState }from 'react';
import logo from '../../assets/logo.png';
import SignInForm from './signInForm';
import axios from 'axios';

const SignUp = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const firstNameError = document.querySelector(".firstName.error");
        const lastNameError = document.querySelector(".lastName.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        
        axios({
        method: "post",
        url: `http://localhost:3000/api/auth/signup`,
        withCredentials: true,
        data: {
          firstname,
          lastname,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            firstNameError.innerHTML = res.data.errors.firstName;
            lastNameError.innerHTML = res.data.errors.lastName;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    };

  return (
    <>
    {formSubmit ? (
      <>
        <SignInForm />
        <span></span>
        <h4 className="success">
          Enregistrement réussi, veuillez-vous connecter
        </h4>
      </>
    ) : (
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
        <form action="" onSubmit={handleRegister} id="signup-form">
		<div class="space-y-4">
            <input type="text" placeholder="Nom" onChange={(e) => setlastName(e.target.value)} class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <div className="lastName error"></div>
			<input type="text" placeholder="Prénom" onChange={(e) => setfirstName(e.target.value)} class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<div className="firstName error"></div>
            <input type="text" placeholder="Adresse E-mail" onChange={(e) => setEmail(e.target.value)} class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <div className="email error"></div>
			<input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <div className="email error"></div>
        </div>
			<div class="text-center mt-6">
				<input type="submit" class="py-3 w-64 text-xl text-white bg-red-500 rounded-2xl" value="Créer un compte" />
			</div>
        </form>
		</div>
		<div class="w-40 h-40 absolute bg-red-200 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-red-200 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
    )}
    </>
  );
};

export default SignUp;