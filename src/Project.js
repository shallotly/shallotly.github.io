import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  & > a {
    display: block;
    text-align: center;
  }

  div {
    margin: 7px auto;
  }

  div a:first-child {
    font-weight: bold;
    margin-right: 5px;
  }

  div a:last-child {
    margin-left: 5px;
  }

  div,
  p {
    max-width: 800px;
  }

  p {
    margin: 0 auto;
  }
`;

// maybe some style stuff
const data = {
  imgPath: 'test.jpg',
  title:
    'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
  publisher: 'NBC News',
  articleUrl:
    'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
  publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
  description:
    'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
};

export const Project = () => {
  return (
    <Div>
      {data.imgPath && (
        <a href={data.articleUrl}>
          <img src={`/images/${data.imgPath}`} />
        </a>
      )}
      <div>
        <a href={data.articleUrl}>{data.title}</a>|
        <a href={data.publisherUrl}>{data.publisher}</a>
      </div>
      <p>{data.description}</p>
    </Div>
  );
};
