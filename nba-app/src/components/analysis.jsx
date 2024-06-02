import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './analysis.css';


import img2004_1 from '../images/2004/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2004_2 from '../images/2004/Defensive_Efficiency_vs_Win_Percentage.png';
import img2004_3 from '../images/2004/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2004_4 from '../images/2004/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2005_1 from '../images/2005/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2005_2 from '../images/2005/Defensive_Efficiency_vs_Win_Percentage.png';
import img2005_3 from '../images/2005/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2005_4 from '../images/2005/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2006_1 from '../images/2006/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2006_2 from '../images/2006/Defensive_Efficiency_vs_Win_Percentage.png';
import img2006_3 from '../images/2006/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2006_4 from '../images/2006/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2007_1 from '../images/2007/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2007_2 from '../images/2007/Defensive_Efficiency_vs_Win_Percentage.png';
import img2007_3 from '../images/2007/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2007_4 from '../images/2007/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2008_1 from '../images/2008/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2008_2 from '../images/2008/Defensive_Efficiency_vs_Win_Percentage.png';
import img2008_3 from '../images/2008/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2008_4 from '../images/2008/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2009_1 from '../images/2009/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2009_2 from '../images/2009/Defensive_Efficiency_vs_Win_Percentage.png';
import img2009_3 from '../images/2009/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2009_4 from '../images/2009/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2010_1 from '../images/2010/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2010_2 from '../images/2010/Defensive_Efficiency_vs_Win_Percentage.png';
import img2010_3 from '../images/2010/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2010_4 from '../images/2010/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2011_1 from '../images/2011/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2011_2 from '../images/2011/Defensive_Efficiency_vs_Win_Percentage.png';
import img2011_3 from '../images/2011/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2011_4 from '../images/2011/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2012_1 from '../images/2012/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2012_2 from '../images/2012/Defensive_Efficiency_vs_Win_Percentage.png';
import img2012_3 from '../images/2012/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2012_4 from '../images/2012/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2013_1 from '../images/2013/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2013_2 from '../images/2013/Defensive_Efficiency_vs_Win_Percentage.png';
import img2013_3 from '../images/2013/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2013_4 from '../images/2013/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2014_1 from '../images/2014/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2014_2 from '../images/2014/Defensive_Efficiency_vs_Win_Percentage.png';
import img2014_3 from '../images/2014/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2014_4 from '../images/2014/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2015_1 from '../images/2015/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2015_2 from '../images/2015/Defensive_Efficiency_vs_Win_Percentage.png';
import img2015_3 from '../images/2015/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2015_4 from '../images/2015/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2016_1 from '../images/2016/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2016_2 from '../images/2016/Defensive_Efficiency_vs_Win_Percentage.png';
import img2016_3 from '../images/2016/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2016_4 from '../images/2016/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2017_1 from '../images/2017/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2017_2 from '../images/2017/Defensive_Efficiency_vs_Win_Percentage.png';
import img2017_3 from '../images/2017/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2017_4 from '../images/2017/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2018_1 from '../images/2018/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2018_2 from '../images/2018/Defensive_Efficiency_vs_Win_Percentage.png';
import img2018_3 from '../images/2018/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2018_4 from '../images/2018/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2019_1 from '../images/2019/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2019_2 from '../images/2019/Defensive_Efficiency_vs_Win_Percentage.png';
import img2019_3 from '../images/2019/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2019_4 from '../images/2019/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2020_1 from '../images/2020/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2020_2 from '../images/2020/Defensive_Efficiency_vs_Win_Percentage.png';
import img2020_3 from '../images/2020/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2020_4 from '../images/2020/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2021_1 from '../images/2021/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2021_2 from '../images/2021/Defensive_Efficiency_vs_Win_Percentage.png';
import img2021_3 from '../images/2021/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2021_4 from '../images/2021/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2022_1 from '../images/2022/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2022_2 from '../images/2022/Defensive_Efficiency_vs_Win_Percentage.png';
import img2022_3 from '../images/2022/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2022_4 from '../images/2022/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2023_1 from '../images/2023/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2023_2 from '../images/2023/Defensive_Efficiency_vs_Win_Percentage.png';
import img2023_3 from '../images/2023/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2023_4 from '../images/2023/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

import img2024_1 from '../images/2024/Average_Scoring_Margin_vs_Win_Percentage.png';
import img2024_2 from '../images/2024/Defensive_Efficiency_vs_Win_Percentage.png';
import img2024_3 from '../images/2024/Effective_Field_Goal_Percentage_vs_Win_Percentage.png';
import img2024_4 from '../images/2024/Opponent_Effective_Field_Goal_Percentage_vs_Win_Percentage.png';

// Define a mapping of seasons to their images
const imagesBySeason = {
  2004: [img2004_1, img2004_2, img2004_3, img2004_4],
  2005: [img2005_1, img2005_2, img2005_3, img2005_4],
  2006: [img2006_1, img2006_2, img2006_3, img2006_4],
  2007: [img2007_1, img2007_2, img2007_3, img2007_4],
  2008: [img2008_1, img2008_2, img2008_3, img2008_4],
  2009: [img2009_1, img2009_2, img2009_3, img2009_4],
  2010: [img2010_1, img2010_2, img2010_3, img2010_4],
  2011: [img2011_1, img2011_2, img2011_3, img2011_4],
  2012: [img2012_1, img2012_2, img2012_3, img2012_4],
  2013: [img2013_1, img2013_2, img2013_3, img2013_4],
  2014: [img2014_1, img2014_2, img2014_3, img2014_4],
  2015: [img2015_1, img2015_2, img2015_3, img2015_4],
  2016: [img2016_1, img2016_2, img2016_3, img2016_4],
  2017: [img2017_1, img2017_2, img2017_3, img2017_4],
  2018: [img2018_1, img2018_2, img2018_3, img2018_4],
  2019: [img2019_1, img2019_2, img2019_3, img2019_4],
  2020: [img2020_1, img2020_2, img2020_3, img2020_4],
  2021: [img2021_1, img2021_2, img2021_3, img2021_4],
  2022: [img2022_1, img2022_2, img2022_3, img2022_4],
  2023: [img2023_1, img2023_2, img2023_3, img2023_4],
  2024: [img2024_1, img2024_2, img2024_3, img2024_4],
};

const markdownBySeason = {
  2004: `**2004 Statistical Trends:** 
  * Peterson's Coefficient: Closer to 1 = statistically significant. Closer to 0 = not significant.
    * Defensive Efficiency was somewhat related to win percentage. Overall, better defensive teams had a higher win percentage.
  `,
  2005: 'Markdown content for 2005 season',
  2006: 'Markdown content for 2006 season',
  2007: 'Markdown content for 2007 season',
  2008: 'Markdown content for 2008 season',
  2009: 'Markdown content for 2009 season',
  2010: 'Markdown content for 2010 season',
  2011: 'Markdown content for 2011 season',
  2012: 'Markdown content for 2012 season',
  2013: 'Markdown content for 2013 season',
  2014: 'Markdown content for 2014 season',
  2015: `**2015 Statistical Trends:** 
  * Peterson's Coefficient: Closer to 1 = statistically significant. Closer to 0 = not significant.
    * Defensive Efficiency was somewhat related to win percentage. Overall, better defensive teams had a higher win percentage.
    * Stephen Curry Effect: EFG went up and better shooting teams started to win championships. Clusters do not fit as well here.
  `,
  2016: 'Markdown content for 2016 season',
  2017: 'Markdown content for 2017 season',
  2018: 'Markdown content for 2018 season',
  2019: 'Markdown content for 2019 season',
  2020: 'Markdown content for 2020 season',
  2021: 'Markdown content for 2021 season',
  2022: 'Markdown content for 2022 season',
  2023: 'Markdown content for 2023 season',
  2024: 'Markdown content for 2024 season',
};

const Analysis = () => {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const renderImages = () => {
    if (!selectedSeason) return null;

    const images = imagesBySeason[selectedSeason] || [];
    return images.map((image, index) => (
      <div key={index} className='image-container'>
        <img
          src={image}
          alt={`Season ${selectedSeason} Image ${index + 1}`}
          className='season-image'
        />
      </div>
    ));
  };

  return (
    <div className='analysis-container'>
      <h1>NBA Team Analysis Past 20 Years</h1>
      <div className='season-buttons'>
        {Array.from({ length: 21 }, (_, i) => 2004 + i).map(season => (
          <button key={season} onClick={() => handleSeasonClick(season)} className={`season-button ${selectedSeason === season ? 'selected' : ''}`}>
            {season}
          </button>
        ))}
      </div>
      <div className='season-content'>
        <div className='season-images'>
          {renderImages()}
        </div>
        <div className='markdown-section'>
          <ReactMarkdown>
            {selectedSeason && markdownBySeason[selectedSeason]}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
