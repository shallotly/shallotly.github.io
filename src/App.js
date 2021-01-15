import { Component } from 'react';
import styled from 'styled-components';

import { Project } from './Project';
import data from './data';

const Container = styled.div`
  font-family: Inconsolata;
  color: #121212;
  font-size: 19px;
  line-height: 22px;

  > p {
    max-width: 760px;
    margin: 15px auto;
  }

  h1 {
    font-size: 19px;
    padding: 0 5px 6px;
    margin: 80px auto 13px;
    font-weight: 400;
    max-width: 760px;
  }

  hr {
    width: 85px;
    border: none;
    border-top: 1px solid #a7a7a7;
    margin: 0;
    margin-top: 5px;
  }
`;

const Footer = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;

  p {
    display: inline-block;
    margin: 0;
  }

  a {
    color: black;
  }

  span:last-child {
    display: none;
  }

  span {
    margin: 0 5px;
  }
`;

const footerLinks = {
  GitHub: 'https://github.com/shallotly',
  Twitter: 'https://twitter.com/shallotly',
  Resume: '/resume.pdf',
  Email: 'mailto:li.zihao@columbia.edu',
};

const NAME_ROTATE_TIME = 3000;
const ALIAS = [
  '厉子浩',
  'Zihao Li',
  '厲子浩',
  'Charlotte Li',
  'shallotly',
  'char *',
];

class App extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.changeName(), NAME_ROTATE_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  changeName() {
    this.setState({
      index: this.state.index + 1,
    });
  }

  render() {
    return (
      <Container>
        <p>
          Hi, my name is <b>{ALIAS[this.state.index % ALIAS.length]}</b>.
        </p>
        <p>
          I am a third-year computer science-math major at Columbia University
          interested in data visualization and data journalism.
        </p>
        <p>
          I also have experience in data processing, mapping, design, natural
          language processing, design, and video editing. You can view my art{' '}
          <a href="https://charligraphy.wordpress.com">here</a>. My resume is{' '}
          <a href={`/resume.pdf`}>here</a>. You can hmu at{' '}
          <a href="mailto:li.zihao@columbia.edu">li.zihao@columbia.edu</a>.
        </p>
        <h1>
          Projects
          <hr />
        </h1>
        <div>
          {data.projects.map(i => (
            <Project data={i} />
          ))}
        </div>
        <h1>
          Coursework
          <hr />
        </h1>
        <div>
          {data.courses.map(i => (
            <Project data={i} />
          ))}
        </div>
        <Footer>
          {Object.keys(footerLinks).map(key => (
            <>
              <p key={key}>
                <a key={key} href={footerLinks[key]}>
                  {key}
                </a>
              </p>
              <span>|</span>
            </>
          ))}
        </Footer>
      </Container>
    );
  }
}

export default App;
