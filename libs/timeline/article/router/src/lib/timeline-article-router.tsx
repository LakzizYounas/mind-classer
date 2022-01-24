import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { EditablePage } from '@mind-class/timeline-article-feature-editable-page';

export const TimelineArticleRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EditablePage />} />
    </Routes>
  );
};
