import React from 'react';
import styled from "styled-components";

// maybe some style stuff
const data = {
    imgPath: 'test.jpg',
    title: 'Map: International student enrollment is in jeopardy. These are the states that would be affected the most.',
    publisher: 'NBC News',
    articleUrl: 'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
    publisherUrl: 'https://www.nbcnews.com/pages/author/charlotte-li',
    description: 'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. For this story, I worked with Jiachuan Wu, my colleague at NBC News over the summer, to scrape college tuition data and F and J visa data over the years. We processed these data in a spreadsheet. I also worked on making the map and the bar chart in illustrator and D3geo. Jiachuan added a toggle to the maps.',
}

export const Project = () => { 
    
    return(
    <div>
        {/*<div style={{ backgroundImage: `url('/images/${data.imgPath}')` }}></div>*/}
        <a href= {data.articleUrl}>
        {data.imgPath && (
            //{!imgPath.includes('.mp4') ? (
            <img src={`/images/${data.imgPath}`} />
            /*
            ) : (
              <video autoPlay playsInline muted loop>
                <source src={require(`../images/${imgPath}`)} />
              </video>
            )}
            */
        )}
        </a>
        <div className = "Title">
            <a href= {data.articleUrl} >{data.title}</a>
            <a href= {data.publisherUrl} >{data.pubisher}</a>
        </div>
        <p>{data.description}</p>
    </div>
    );
};