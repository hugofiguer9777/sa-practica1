import { render, screen } from '@testing-library/react';
import App from './App';

test('Test prueba1', () => {
  render(<App />);
  const linkElement = screen.getByText(/practica #1/i);
  expect(linkElement).toBeInTheDocument();
});
