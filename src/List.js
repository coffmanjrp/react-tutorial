import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  padding: 12px 64px;
`;

const ListItem = styled.div`
  padding: 8px 16px;
  &:nth-child(n + 2) {
    border-top: 1px solid #d9d8de;
  }
`;

export class List extends React.Component {
  componentWillUnmount() {
    console.log('Listjs:componentWillUnmount');
  }

  render() {
    const { langs } = this.props;

    return (
      <Container>
        {langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>;
        })}
      </Container>
    );
  }
}
