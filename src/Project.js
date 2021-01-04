import React from 'react';
import styled from 'styled-components';

const WIDTH = '760px';
const HEIGHT = '460px';

const Div = styled.div`
  margin-bottom: 20px;

  & > a {
    display: block;
    margin: 0 auto;
    margin-bottom: 8px;
    text-align: center;
    width: ${WIDTH};
    max-width: calc(100% - 30px);
    height: ${HEIGHT};

    img {
      object-fit: cover;
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
    width: ${WIDTH};
    max-width: calc(100% - 30px);
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
