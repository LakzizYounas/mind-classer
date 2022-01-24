import { render } from '@testing-library/react';

import { EditablePage } from './editable-page';

describe('EditablePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditablePage />);
    expect(baseElement).toBeTruthy();
  });
});
