import React, {useState} from 'react';
//import Header from '../Header/log'
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';

const Log = () => {
    const [signInModal, setSignInModal] = useState(true);
    const [signUpModal, setSignUpModal] = useState(false);

    const handleModals = (e) => {
        if(e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    }

  return (
    <div>
        <ul class="bg-red-500 justify-center py-14 select-none flex">
                <li>
                    <button onClick={handleModals} id="login" class="py-2 px-4 shadow-md no-underline rounded-full bg-red-200 text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Se connecter</button>
                </li>
                <li>
                    <button onClick={handleModals} id="register" class="py-2 px-4 shadow-md no-underline rounded-full bg-red-500 text-black font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Créer un compte</button>
                </li>
        </ul>
        {signInModal && <SignInForm />}
        {signUpModal && <SignUpForm />}
    </div>
  );
};

export default Log;