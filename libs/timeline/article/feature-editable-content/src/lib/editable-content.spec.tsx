import { render } from '@testing-library/react';

import { EditableContent } from './editable-content';

describe('EditableContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditableContent text="" />);
    expect(baseElement).toBeTruthy();
  });
});
