import { Link, useNavigate } from "react-router-dom";

import { Form, Input } from "antd";

import "../styles/RegisterStyles.css";

const Login = () => {
  const navigate = useNavigate();
  // Form handler
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={handleLogin} className="register-form">
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>

        <Link to="/register" className="m-2">
          New User Register Now
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
