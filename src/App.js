import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
  font-family: Helvetica;
  color: #121212;
  font-size: 18px;

  > p {
    max-width: 600px;
    margin: 15px auto;
  }

  h1 {
    font-size: 18px;
    border-bottom: 1px solid #ddd;
    padding: 0 5px 6px;
    display: inline-block;
    margin: 20px 0;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const Footer = styled.div`
  margin: 0 auto;
  margin-top: 12px;
  display: flex;
  justify-content: center;

  p {
    display: inline-block;
    margin: 0;
  }

  a {
    color: black;
  }

  p:not(:last-child) {
    border-right: 2px solid #121212;
    padding-right: 7px;
    margin-right: 7px;
  }
`;

const footerLinks = {
  GitHub: 'https://github.com/shallotly',
  Twitter: 'https://twitter.com/shallotly',
  Resume: '#',
  Email: 'mailto:li.zihao@columbia.edu',
};

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
        <h1>Projects</h1>
        <h1>Coursework</h1>
        <Footer>
          {Object.keys(footerLinks).map(key => (
            <p key={key}>
              <a key={key} href={footerLinks[key]}>
                {key}
              </a>
            </p>
          ))}
        </Footer>
      </Container>
    );
  }
}

export default App;
