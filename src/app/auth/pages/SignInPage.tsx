import React, { useState } from 'react';
import { Form, Input, Icon, Typography, Button } from 'antd';

type SignInPageType = {
  form: any;
};

const SignInPage: React.FC<SignInPageType> = props => {
  const { getFieldDecorator, validateFields } = props.form;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    validateFields((err: any, values: any) => {
      if (!err) {
        setLoading(true);
        console.log('Received values of form: ', values);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  return (
    <div style={styles.container}>
      <Typography.Title level={3}>Sign In</Typography.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Item>{emailDecorator}</Form.Item>
        <Form.Item>{passwordDecorator}</Form.Item>
        <Button icon="login" type="primary" htmlType="submit" style={styles.button} loading={loading}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const styles = {
  container: { width: 300 },
  icon: { color: 'rgba(0,0,0,.25)' },
  button: { width: '100%' },
};

const WrappedSignInPage = Form.create({ name: 'signIn' })(SignInPage);

export default WrappedSignInPage;
