import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.p`
p {
  font-family: Helvetica;
  max-width: 600px;
  color: #121212;
  font-size: 18px;
}
`
class App extends Component {
  render() {
    return (
      <Container>
        <p>Hi my name is xia luo te.</p>
        <p>
          Hi am Charlotte, a third-year computer science-math major at Columbia
          University I also fuck up the art world: you can view my art{' '}
          <a href="#">here</a>. My resume is <a href="#">here</a>. You can hmu
          at <a href="mailto:li.zihao@columbia.edu">li.zihao@columbia.edu</a>.
        </p>
        <p>
          I can do data processing, mapping, natural language processing,
          design, video editing, data visualization.
        </p>
      </Container>
    );
  }
}

export default App;
