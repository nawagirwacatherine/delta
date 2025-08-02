import React from 'react';
import WeeklyTips from '../components/topicspage/WeeklyTips';
import Steps from '../components/topicspage/Steps';
import QandAnswer from '../components/topicspage/QandAnswer';
import TopicsPageNav from '../components/TopicsPageNav';

const TopicPage = () => {
  return (
    <div>
    <div id='disease'> 
  <WeeklyTips/>
</div>

<div id='challenges'>
  <Steps/>
</div>

<div id='details'>
  <QandAnswer/>
</div>
    </div>
  );
};

export default TopicPage;