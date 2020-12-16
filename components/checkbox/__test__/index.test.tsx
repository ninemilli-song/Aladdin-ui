import React from 'react';
import { render } from '@testing-library/react';
import CheckBox from '../CheckBox';

describe('<CheckBox />', () => {
  test('should render default', () => {
    const { container } = render(<CheckBox>default</CheckBox>);
    expect(container).toMatchSnapshot();
  });

  test('should render checkbox with type', () => {
    const kinds: any[] = ['info', 'warning', 'positive', 'negative'];

    const { getByText } = render(
      <>
        {kinds.map((k) => (
          <CheckBox kind={k} key={k}>
            {k}
          </CheckBox>
        ))}
      </>,
    );

    kinds.forEach((k) => {
      expect(getByText(k)).toMatchSnapshot();
    });
  });
});
