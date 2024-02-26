import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cookies, setCookie] = useCookies(['auth']);

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/api/v1/auth/sign_in', data)
      .then((response) => {
        setCookie('auth', response.headers['access-token']);
      })
      .catch((error) => {
        console.error('ログインに失敗しました:', error);
      });
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className='mb-4'>ログイン</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3'>
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                type='email'
                placeholder='メールアドレス'
                {...register('email', {
                  required: 'メールアドレスは必須です。',
                })}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                type='password'
                placeholder='パスワード'
                {...register('password', {
                  required: 'パスワードは必須です。',
                })}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </Form.Group>

            <Button variant='primary' type='submit'>
              ログイン
            </Button>
          </Form>
        </Col>
      </Row>
      <p>{cookies.auth}</p>
    </Container>
    
  );
}

export default Login;