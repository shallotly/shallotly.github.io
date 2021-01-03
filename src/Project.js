import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 20px;

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
