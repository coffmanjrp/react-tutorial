import styled from 'styled-components';
import { Button } from './components/button';
import { useState } from 'react';

const Container = styled.div`
  padding: 12px 64px;
`;

const Label = styled.label`
  display: flex;
  font-size: 0.875rem;
  font-wight: bold;
  color: #757575;
`;

const Input = styled.input`
  padding: 3px;
  border: 1px solid #000;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

const FormButton = styled(Button)`
  width: 120px;
`;

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    onAddLang(text);
  };

  return (
    <Container>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <Label>言語</Label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};
