import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Typography, Button } from 'antd';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { SIGN_IN_PATH } from '../../core/constants/routePaths';
import { SignInUpFormDataType, signUp, SignUpActionType } from '../store/actions';

type SignUpPageType = {
  form: any;
};

type DispatchTypes = Dispatch<SignUpActionType>;

const SignUpPage: React.FC<SignUpPageType> = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<DispatchTypes>();

  const emailDecorator = getFieldDecorator('email', {
    rules: [
      {
        type: 'email',
        message: 'The input is not valid email',
      },
      {
        required: true,
        message: 'Please input your email',
      },
    ],
  })(<Input prefix={<Icon type="user" style={styles.icon} />} placeholder="Email" />);

  const passwordDecorator = getFieldDecorator('password', {
    rules: [
      {
        required: true,
        message: 'Please input your password',
      },
    ],
  })(<Input type="password" prefix={<Icon type="lock" style={styles.icon} />} placeholder="Password" />);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    validateFields(async (error: any, values: SignInUpFormDataType) => {
      if (!error) {
        setLoading(true);
        await dispatch(signUp(values));
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Harmony CRM | Sign Up</title>
      </Helmet>
      <div style={styles.container}>
        <Typography.Title level={3}>Sign Up</Typography.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Item>{emailDecorator}</Form.Item>
          <Form.Item>{passwordDecorator}</Form.Item>
          <Button icon="login" type="primary" htmlType="submit" style={styles.button} loading={loading}>
            Submit
          </Button>
          <Form.Item>
            or <Link to={SIGN_IN_PATH}>sign in</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

const styles = {
  container: { width: 300 },
  icon: { color: 'rgba(0,0,0,.25)' },
  button: { width: '100%' },
};

const WrappedSignUpPage = Form.create({ name: 'signUp' })(SignUpPage);

export default WrappedSignUpPage;
