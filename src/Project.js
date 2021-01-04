import React from 'react';
import styled from 'styled-components';

const WIDTH = '420px';
const HEIGHT = '260px';

const Div = styled.div`
  margin: 0 auto 30px;
  width: 760px;
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
