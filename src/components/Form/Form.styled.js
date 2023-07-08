import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export const FormStyled = styled.form`
  width: 600px;
  margin: 0 auto;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 10px;
`;

export const Textarea = styled(Form.Control)`
  max-height: 180px;
`;
