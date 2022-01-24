import { render } from '@testing-library/react';

import { TimelineArticleRouter } from './timeline-article-router';

describe('TimelineArticleRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineArticleRouter />);
    expect(baseElement).toBeTruthy();
  });
});
