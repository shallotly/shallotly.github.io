import React from 'react';
import styled from 'styled-components';

const WIDTH = '450px';
const HEIGHT = '320px';

const Div = styled.div`
  margin: 0 auto 30px;
  max-width: calc(100% - 30px);

  & > a {
    display: block;
    margin-bottom: 8px;
    text-align: center;
    width: ${WIDTH};
    nahnahnahheight: ${HEIGHT};

    img {
      object-fit: cover;
      /* object-position: left 50%; */
      width: 100%;
      height: 100%;
    }

    video {
      width: 100%;
    }
  }

  div {
    margin: 0px auto;
    margin-bottom: 7px;
  }

  div a {
    text-decoration: none;
    color: #121212;
    line-height: 23px;
  }

  div a:first-child {
    font-weight: bold;
    margin-right: 5px;
    border-bottom: 1px solid #ccc;
  }

  div a:last-child {
    margin-left: 5px;
  }

  div.title a {
    /* font-size: 21px; */
  }

  p {
    margin: 0 auto;
  }

  p.award {
    margin-top: 7px;
    a {
      color: #121212;
    }
  }
`;

/* This function returns the publisher & URL for the URL of a certain article */
const getPublisher = (url,ins) => {
  if (url.includes('nbcnews.com'))
    return ['NBC News', 'https://www.nbcnews.com/pages/author/charlotte-li'];
  else if (url.includes('columbiaspectator.com'))
    return [
      'Columbia Daily Spectator',
      'https://www.columbiaspectator.com/contributors/Charlotte-Li/',
    ];
  else 
    return [ins,url];
  return [url, url];
};

export const Project = ({
  data: { articleUrl, imgPath, title, description, award, institution },
}) => {
  const [publisher, publisherUrl] = getPublisher(articleUrl,institution);
  return (
    <Div className='project'>
      {imgPath && (
        <a href={articleUrl}>
          {imgPath.includes('.mov') ? (
            <video autoPlay playsInline muted loop>
              <source src={`/images/${imgPath}`} />
            </video>
          ) : (
            <img
              src={imgPath.includes('http') ? imgPath : `/images/${imgPath}`}
            />
          )}
        </a>
      )}
      <div className="title">
        <a href={articleUrl}>{title}</a>|<a href={publisherUrl}>{publisher}</a>
      </div>
      <p dangerouslySetInnerHTML={{__html:description}}></p>
      {award && (
        <p
          className="award"
          dangerouslySetInnerHTML={{ __html: '🏆 ' + award }}
        ></p>
      )}
    </Div>
  );
};
