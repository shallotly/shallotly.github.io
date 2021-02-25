export default {
  projects: [
    {
      imgPath: 'international.mov',
      title:
        'International student enrollment is in jeopardy. These are the states that would be affected the most.',
      articleUrl:
        'https://www.nbcnews.com/news/us-news/map-trump-international-student-rule-effects-state-n1233219',
      description:
        'This story was published in response to ICE’s policy regarding international visa and immigration status amid COVID-19 and school reopening. I scraped college tuition and student visa data. I also made a map and bar chart with d3-geo and Illustrator.',
    },
    {
      imgPath: 'ppp.png',
      title:
        'More than 600,000 businesses got $150,000-plus PPP loans. Here are the ones near you that received them.',
      articleUrl:
        'https://www.nbcnews.com/news/us-news/ppp-loan-map-2020-n1233849',
      description:
        'I analyzed PPP loan data with Python and wrote a story accompanying a map in Mapbox and D3. I conducted research on government relief funds for Covid-19, the CARES Act, and PPP loans.',
    },
    {
      imgPath: 'survey.mov',
      title:
        'As the 2020 election heats up, find out how your fellow Americans feel about democracy.',
      articleUrl:
        'https://www.nbcnews.com/think/opinion/2020-election-heats-find-out-how-your-fellow-americans-feel-ncna1234649',
      description:
        'I pulled, processed, and cleaned data from a nationwide survey with Python and pandas. I built a form and interactive tool to survey readers and visualize the data with maps, bar charts, and transitions. I used D3 and Observable, and worked with Joe Murphy and Robin Muccari',
    },
    {
      imgPath:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MJQEFP4WVNASVES4BCIJCHKZKM.gif',
      title:
        'Uncertainty Looms as Student Jobs are Disappearing During the Great Lockdown',
      articleUrl:
        'https://www.columbiaspectator.com/eye-lead/2020/05/15/uncertainty-looms-as-student-jobs-are-disappearing-during-the-great-lockdown/',
      description:
        "After scraping data from Columbia's job posting platform for over a year, and sourcing community-collected internship cancellation data, I built several interactives visualizing the data. I used d3-force to build a bubble chart and d3 to animate a line chart. I used Scrollama to add scroll triggers.",
      award:
        'The story won a <a href="https://pudding.cool/process/pudding-cup-2020/">Pudding Cup 2020</a> Honorable Mention',
    },
    {
      imgPath: 'athletes.mov',
      title:
        'For Athletes, Career Networks Unlock a World of Opportunity in Finance and Consulting',
      articleUrl:
        'https://www.columbiaspectator.com/the-eye/2020/11/14/for-athletes-career-networks-unlock-a-world-of-opportunity-in-finance-and-consulting/',
      description:
        'Edited and helped to develop an interactive visualization by Melissa Wang using data collected by Miles Schachner, Elizabeth Karpen, and Clara Ence Morse.',
    },
    {
      imgPath: 'campaign-finance.png',
      title: 'Who are Columbia affiliates backing in 2020?',
      articleUrl:
        'https://www.columbiaspectator.com/news/2019/11/23/who-are-columbia-affiliates-backing-in-2020-campaign-donation-data-shows-booker-in-the-lead-2/',
      description:
        'In preparation for the November 2019 Democratic Debate, we looked at a large dataset consisting of thousands of individual donations made by staff and faculty members at Columbia University. I cleaned and aggregated the data and built alluvial visualizations and other charts using R and Adobe Illustrator. I used ai2html for web production.',
    },
    {
      imgPath: '311.png',
      title:
        'Community members see long-awaited safety improvements to Morningside Park in aftermath of Majors’ death',
      articleUrl:
        'https://www.columbiaspectator.com/news/2020/01/30/community-members-see-long-awaited-safety-improvements-to-morningside-park-in-aftermath-of-majors-death/',
      description:
        'Following the death of Tessa Majors and a CB9 meeting for improving park conditions in Manhattan, I reported on streetlight complaints with data from NYC Open Data. I processed spatial data from Geofabrik with mapshaper and QGIS. I analyzed the streetlight data in R and merged it with the spatial data. I finalized the map in Illustrator with titles and legends.',
    },
    {
      imgPath: 'giving-day.png',
      title:
        '‘The next chapter’: Despite history of alumni apathy, Bollinger-era initiatives drive newfound culture of engagement',
      articleUrl:
        'https://www.columbiaspectator.com/news/2019/10/31/the-next-chapter-despite-history-of-alumni-apathy-bollinger-era-initiatives-drive-newfound-culture-of-engagement/',
      description:
        'In preparation for the November 2019 Democratic Debate, we looked at a large dataset consisting of thousands of individual donations made by staff and faculty members at Columbia University. I cleaned and aggregated the data and built alluvial visualizations and other charts using R and Adobe Illustrator. I used ai2html for web production',
    },
  ],
  academia: [
    {
      title: 'Thesaurus TK',
      articleUrl: 'TK',
      description:
        'TK',
    },
    {
      title: 'Web server in C from scratch',
      articleUrl: 'Advanced Programming',
      description:
        'I coded a web server that implements a subset of HTTP 1.0. The server returns dynamic content and maintains a persistent TCP connection to a database server. I used socket programming as well.',
    },
  ],
};
