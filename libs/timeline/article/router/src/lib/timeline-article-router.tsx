import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { TimelineArticleFeature } from '@mind-class/timeline/article/feature';

export const TimelineArticleRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TimelineArticleFeature />} />
    </Routes>
  );
};
