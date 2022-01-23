import { render } from '@testing-library/react';

import { TimelineArticleFeature } from './timeline-article-feature';

describe('TimelineArticleFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineArticleFeature />);
    expect(baseElement).toBeTruthy();
  });
});
