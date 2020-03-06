import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Icon, Typography, Button, message, Select } from 'antd';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';

import { SIGN_IN_PATH, DASHBOARD_PATH } from '../../core/constants/routePaths';
import { signUp } from '../store/actions';
import { CallApiDispatchType } from '../../api/store/actions';
import { AxiosError } from 'axios';

type SignUpPageType = {
  form: any;
};

const SignUpPage: React.FC<SignUpPageType> = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<CallApiDispatchType>();
  const [role, setRole] = useState<string>('juniorResearcher');
  const [gender, setGender] = useState<string>('male');

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
        const payload = { ...values, role, gender };
        setLoading(true);
        await dispatch(signUp(payload, handleApiError, handleApiSuccess));
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
    message.success('You successfully registered!');
    history.push(DASHBOARD_PATH);
  };

  const handleGenderChange: any = (value: string) => {
    setGender(value);
  };

  const handleRoleChange: any = (value: string) => {
    setRole(value);
  };

  return (
    <>
      <Helmet>
        <title>Harmony CRM | Sign Up</title>
      </Helmet>
      <div style={styles.container}>
        <Typography.Title level={3}>Sign Up</Typography.Title>
        <Form onSubmit={handleSubmit}>
          <div style={styles.formFields} className="form-fields">
            <Form.Item>{emailDecorator}</Form.Item>
            <Form.Item>{passwordDecorator}</Form.Item>
            <Form.Item>{firstNameDecorator}</Form.Item>
            <Form.Item>{lastNameDecorator}</Form.Item>
            <Form.Item hasFeedback>
              <Select onChange={handleGenderChange} value={gender}>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="else">Else</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item hasFeedback>
              <Select onChange={handleRoleChange} value={role}>
                <Select.Option value="analyst">Analyst</Select.Option>
                <Select.Option value="researcher">Researcher</Select.Option>
                <Select.Option value="juniorResearcher">Junior Researcher</Select.Option>
              </Select>
            </Form.Item>
          </div>
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
  container: { width: 520 },
  icon: { color: 'rgba(0,0,0,.25)' },
  button: { width: '100%' },
  formFields: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 10,
  },
};

const WrappedSignUpPage = Form.create({ name: 'signUp' })(SignUpPage);

export default WrappedSignUpPage;
