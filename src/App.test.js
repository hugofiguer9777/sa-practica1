import { render, screen } from '@testing-library/react';
import App from './App';

test('Test1', () => {
  render(<App />);
  const linkElement = screen.getByText(/practica #1/i);
  expect(linkElement).toBeInTheDocument();
});

 test('Falla', () => {
   render(<App />);
   const linkElement = screen.getByText(/falla forzada/i);
   expect(linkElement).toBeInTheDocument();
 });
