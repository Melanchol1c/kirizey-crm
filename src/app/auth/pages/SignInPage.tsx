import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Icon, Typography, Button, message } from 'antd';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';

import { SIGN_UP_PATH, DASHBOARD_PATH } from '../../core/constants/routePaths';
import { SignInFormDataType, signIn } from '../store/actions';

type SignInPageType = {
  form: any;
};

const SignInPage: React.FC<SignInPageType> = props => {
  const { form } = props;
  const { getFieldDecorator, validateFields } = form;
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

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

    validateFields(async (error: any, { email, password }: SignInFormDataType) => {
      if (!error) {
        setLoading(true);
        dispatch(await signIn({ email, password }, handleError, handleSuccess));
        setLoading(false);
      }
    });
  };

  const handleSuccess = (): void => {
    message.success('You logged in!');
    history.push(DASHBOARD_PATH);
  };

  const handleError = (error: AxiosError) => {
    if (error.response) {
      message.error(error.response.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Harmony CRM | Sign In</title>
      </Helmet>
      <div style={styles.container}>
        <Typography.Title level={3}>Sign In</Typography.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Item>{emailDecorator}</Form.Item>
          <Form.Item>{passwordDecorator}</Form.Item>
          <Button icon="login" type="primary" htmlType="submit" style={styles.button} loading={loading}>
            Submit
          </Button>
          <Form.Item>
            or <Link to={SIGN_UP_PATH}>sign up</Link>
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

const WrappedSignInPage = Form.create({ name: 'signIn' })(SignInPage);

export default WrappedSignInPage;
