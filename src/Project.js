import React from 'react';
import styled from 'styled-components';

const WIDTH = '440px';
const HEIGHT = '320px';

const Div = styled.div`
  margin: 0 auto 30px;
  width: 720px;
  max-width: calc(100% - 30px);

  & > a {
    display: block;
    margin-bottom: 8px;
    text-align: center;
    width: ${WIDTH};
    max-width: calc(100% - 30px);
    height: ${HEIGHT};

    img {
      object-fit: cover;
      /* object-position: left 50%; */
      width: 100%;
      height: 100%;
    }
  }

  div {
    margin: 0px auto;
    margin-bottom: 7px;
  }

  div a {
    text-decoration: none;
    color: #121212;
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
  }

  p {
    margin: 0 auto;
  }
`;

/* This function returns the publisher & URL for the URL of a certain article */
const getPublisher = url => {
  if (url.includes('nbcnews.com'))
    return ['NBC News', 'https://www.nbcnews.com/pages/author/charlotte-li'];
  else if (url.includes('columbiaspectator.com'))
    return [
      'Columbia Daily Spectator',
      'https://www.columbiaspectator.com/contributors/Charlotte-Li/',
    ];
};

export const Project = ({ data: { articleUrl, imgPath, title, description } }) => {
  const [publisher, publisherUrl] = getPublisher(articleUrl);
  return (
    <Div>
      {imgPath && (
        <a href={articleUrl}>
          <img src={imgPath.includes('http') ? imgPath : `/images/${imgPath}`} />
        </a>
      )}
      <div>
        <a href={articleUrl}>{title}</a>|
        <a href={publisherUrl}>{publisher}</a>
      </div>
      <p>{description}</p>
    </Div>
  );
};
