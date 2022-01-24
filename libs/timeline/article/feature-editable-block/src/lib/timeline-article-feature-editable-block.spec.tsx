import { render } from '@testing-library/react';

import TimelineArticleFeatureEditableBlock from './timeline-article-feature-editable-block';

describe('TimelineArticleFeatureEditableBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineArticleFeatureEditableBlock />);
    expect(baseElement).toBeTruthy();
  });
});
