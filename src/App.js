import { Component } from 'react';
import styled from 'styled-components';

import { Project } from './Project';
import data from './data';

const Container = styled.div`
  font-family: Inconsolata;
  color: #121212;
  font-size: 19px;
  line-height: 22px;
  max-width: 700px;
  margin: 0 auto;

  > p {
    max-width: calc(100% - 30px);
    margin: 15px auto;
  }

  h1 {
    font-size: 19px;
    padding: 0 5px 6px;
    margin: 80px auto 13px;
    font-weight: 400;
    max-width: calc(100% - 30px);
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
          I am a student data journalist and a fourth-year computer science-math major at Columbia University.
        </p>
        <p>
          I am interested in how machine learning advances journalism. I also have experience in data analysis, mapping, design, natural
          language processing, and video editing. You can view my art{' '}
          <a href="https://charligraphy.wordpress.com">here</a>. My resume is{' '}
          <a href={`/resume.pdf`}>here</a>. You can contact me at{' '}
          <a href="mailto:li.zihao@columbia.edu">li.zihao@columbia.edu</a>.
        </p>
        <h1>
          Research
          <hr />
        </h1>
        <div>
          {data.academia.map(d => (
            <Project key={d.url} data={d} />
          ))}
        </div>
        <h1>
          Projects
          <hr />
        </h1>
        <div>
          {data.projects.map(d => (
            <Project key={d.url} data={d} />
          ))}
        </div>
        <Footer>
          {Object.keys(footerLinks).map(key => (
            <>
              <p key={key}>
                <a href={footerLinks[key]}>
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
