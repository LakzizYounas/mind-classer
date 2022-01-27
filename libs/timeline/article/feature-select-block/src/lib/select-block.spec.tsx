import { render } from '@testing-library/react';

import { SelectBlock } from './select-block';

describe('SelectBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectBlock />);
    expect(baseElement).toBeTruthy();
  });
});
