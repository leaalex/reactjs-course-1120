import { render, screen } from '@testing-library/react';
import AppOld from './App.old';

test('renders learn react link', () => {
  render(<AppOld />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
