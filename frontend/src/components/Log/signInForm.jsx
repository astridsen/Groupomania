import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import {login} from '../../actions/auth';

import logo from '../../assets/logo.png';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const SignIn = (props) => {

    const navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { post } = useSelector(state => state.post);

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setLoading(true);
    
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
     <div className="min-h-screen bg-red-500 flex justify-center items-start">
	<div className="absolute w-60 h-60 rounded-xl bg-red-200 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div className="absolute w-48 h-48 rounded-xl bg-red-200 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
            <img className="relative w-64" src={logo} alt="groupomanie-logo" />
			<h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">Se connecter</h1>
		</div>
		<Form onSubmit={handleLogin} ref={form} id="signin-form ">
            <div className="space-y-4">
			<Input type="text" name="email" placeholder="Adresse E-mail" value ={email} onChange={onChangeEmail} validations={[required]} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<Input type="password" name="password" placeholder="Mot de Passe" value ={password} onChange={onChangePassword} validations={[required]} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            </div>
			<div className="text-center mt-6">
                <div>
				<button type="submit" className="py-3 w-64 text-xl text-white bg-red-500 rounded-2xl active:bg-zinc-500 shadow" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Se connecter</span>
                </button>
                </div>
                
                {post && (
                 <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {post}
                    </div>
                </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </div>
        </Form>
    </div>
		<div className="w-40 h-40 absolute bg-red-200 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			className="w-20 h-40 absolute bg-red-200 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
  );
};


export default SignIn;