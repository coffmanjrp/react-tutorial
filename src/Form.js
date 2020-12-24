import styled from 'styled-components';
import { Button } from './components/button';
import React from 'react';

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
export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.onAddLang(this.state.text);
  }

  render() {
    const { text } = this.state;

    return (
      <Container>
        <h4>新しい言語の追加</h4>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <Label>言語</Label>
            <Input
              type="text"
              value={text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
          <ButtonContainer>
            <FormButton>追加</FormButton>
          </ButtonContainer>
        </form>
      </Container>
    );
  }
}
