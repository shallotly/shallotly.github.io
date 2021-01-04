import React from 'react';
import styled from 'styled-components';

const WIDTH = '800px';

const Div = styled.div`
  margin-bottom: 20px;

  & > a {
    display: block;
    margin: 0 auto;
    text-align: center;
    max-width: ${WIDTH};
  }

  div {
    margin: 7px auto;
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
    max-width: ${WIDTH};
  }

  p {
    margin: 0 auto;
  }
`;

export const Project = ({data}) => {
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
