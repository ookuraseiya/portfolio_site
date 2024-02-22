import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../src/pages/About';
import { Works } from '../src/pages/Works';
import { Personal } from '../src/pages/Personal';

// const consoleLogMock = jest.spyOn(console, 'log');
global.window.scrollTo = jest.fn();
global.fetch = jest.fn();

test('デモテスト', () => {
  expect(true).toBe(true);
});

test('Aboutページのレンダーテスト', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
});

test('Worksページのレンダーテスト', () => {
  render(
    <BrowserRouter>
      <Works />
    </BrowserRouter>
  );
});

test('Personalページのレンダーテスト', () => {
  render(
    <BrowserRouter>
      <Personal />
    </BrowserRouter>
  );
});
