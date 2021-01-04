import { Component } from 'react';
import styled from 'styled-components';

import { Project } from './Project';
import data from './data';

const Container = styled.div`
  font-family: Helvetica;
  color: #121212;
  font-size: 19px;
  line-height: 24px;

  > p {
    max-width: 540px;
    margin: 15px auto;
  }

  h1 {
    font-size: 19px;
    border-bottom: 1px solid #ddd;
    padding: 0 5px 6px;
    display: inline-block;
    margin: 13px 0;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const Footer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
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
  Resume: '#',
  Email: 'mailto:li.zihao@columbia.edu',
};

const NAME_ROTATE_TIME = 5000;
const ALIAS = ['厉子浩', 'Zihao Li','厲子浩','Charlotte Li','shallotly','char *']

class App extends Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.changeName(), 
      NAME_ROTATE_TIME
      );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  changeName() {
    this.setState({
      index: this.state.index + 1
    })
  }

  render() {
    return (
      <Container>
        <p>Hi my name is {ALIAS[(this.state.index % ALIAS.length)]}.</p>
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
        <div>
          {data.projects.map(i => (
            <Project data={i}/>
          ))}
        </div>
        <h1>Coursework</h1>
        <div>
          {data.courses.map(i => (
            <Project data={i}/>
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
