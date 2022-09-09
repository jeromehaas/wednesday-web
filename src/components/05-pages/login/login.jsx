import LoginForm from 'components/03-molecules/login-form/login-form';
import Cursor from 'components/01-atoms/cursor/cursor';
import { Fragment } from 'react';

const Login = () => {

    return (
        <Fragment>
            <LoginForm />
            <Cursor />
        </Fragment>
    );

};

export default Login;
