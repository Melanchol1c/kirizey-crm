import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Typography, Button, message, Select } from 'antd';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';

import { SIGN_IN_PATH } from '../../core/constants/routePaths';
import { signUp } from '../store/actions';
import { CallApiDispatchType } from '../../api/store/actions';
import { AxiosError } from 'axios';

type SignUpPageType = {
  form: any;
};

const SignUpPage: React.FC<SignUpPageType> = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<CallApiDispatchType>();

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

  const firstNameDecorator = getFieldDecorator('firstName', {
    rules: [
      {
        required: true,
        message: 'Please input your first name',
      },
    ],
  })(<Input type="text" prefix={<Icon type="smile" style={styles.icon} />} placeholder="First name" />);

  const lastNameDecorator = getFieldDecorator('lastName', {
    rules: [
      {
        required: true,
        message: 'Please input your last name',
      },
    ],
  })(<Input type="text" prefix={<Icon type="smile" style={styles.icon} />} placeholder="Last name" />);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    validateFields(async (error: any, values: any) => {
      if (!error) {
        setLoading(true);
        await dispatch(signUp(values, handleApiError, handleApiSuccess));
        setLoading(false);
      }
    });
  };

  const handleApiError = (error: AxiosError): void => {
    if (error.response) {
      message.error(error.response.data);
    }
  };

  const handleApiSuccess = (): void => {
    message.success('Success!');
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
          <Form.Item>{firstNameDecorator}</Form.Item>
          <Form.Item>{lastNameDecorator}</Form.Item>
          <Form.Item label="Gender" hasFeedback>
            <Select defaultValue={'male'}>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="else">Else</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Role" hasFeedback>
            <Select defaultValue={'juniorResearcher'}>
              <Select.Option value="analyst">Analyst</Select.Option>
              <Select.Option value="researcher">Researcher</Select.Option>
              <Select.Option value="juniorResearcher">Junior Researcher</Select.Option>
            </Select>
          </Form.Item>
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
