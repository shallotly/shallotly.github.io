import { Component } from 'react';
import styled from 'styled-components';

import { Project } from './Project';

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

// maybe some style stuff
const data = [
  {imgPath: 'test.jpg',
  title:
    'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
  publisher: 'NBC News',
  articleUrl:
    'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
  publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
  description:
    'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
  },
  {imgPath: 'test.jpg',
  title:
    'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
  publisher: 'NBC News',
  articleUrl:
    'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
  publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
  description:
    'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
  },
];

const courseData = [
  {
  title:
    'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
  publisher: 'NBC News',
  articleUrl:
    'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
  publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
  description:
    'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
  },
  {title:
    'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
  publisher: 'NBC News',
  articleUrl:
    'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
  publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
  description:
    'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
  },
];

const NAME_ROTATE_TIME = 1000;

class App extends Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    this.intervalID = setInterval(() => console.log('hi'), NAME_ROTATE_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

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
        <div>
          {data.map(i => (
            <Project data={i}/>
          ))}
        </div>
        <h1>Coursework</h1>
        <div>
          {courseData.map(i => (
            <Project data={i}/>
          ))}
        </div>
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
