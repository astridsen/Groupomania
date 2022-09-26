import React from 'react';
import Log  from '../components/Log/log'


const Login = () => {
    return (
        <div>
        <Log signin={true} signup={false} />
      </div>
    )
};

export default Login;