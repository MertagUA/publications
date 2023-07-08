import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPublication } from '../../redux/publications/publications';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonStyled, FormStyled, Textarea } from './Form.styled';

export const PublicationForm = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onInputChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }

    if (title.trim() !== '' && body.trim() !== '') {
      setDisabled(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setBody('');
    setDisabled(true);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;

    try {
      dispatch(addPublication({ userId, title, body }));
      setUserId(prevState => prevState + 1);
      toast.success('Publication added!');
    } catch (error) {
      toast.error('Error!');
    }
    resetForm();
  };

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <FloatingLabel label="Title">
        <Textarea
          as="textarea"
          type="text"
          placeholder="Your text"
          id="title"
          name="title"
          value={title}
          onChange={onInputChange}
          maxLength={200}
          className="mb-3"
        />
      </FloatingLabel>
      <FloatingLabel label="Body">
        <Textarea
          as="textarea"
          type="text"
          placeholder="Your text"
          id="body"
          name="body"
          value={body}
          maxLength={400}
          onChange={onInputChange}
        />
      </FloatingLabel>
      <ButtonStyled type="submit" disabled={disabled}>
        Submit
      </ButtonStyled>
    </FormStyled>
  );
};
