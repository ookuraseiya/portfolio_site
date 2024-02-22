// import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../src/pages/About';
// import { Personal } from '../src/pages/Personal';

global.window.scrollTo = jest.fn();
global.fetch = jest.fn();

console.log(process.env);

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

// test('Worksページのレンダーテスト', () => {
//   render(
//     <BrowserRouter>
//       <Works />
//     </BrowserRouter>
//   );
// });

// const originalEnv = process.env;

// beforeEach(() => {
//   // テストの実行前に新しい環境を作成します
//   process.env = {
//     ...originalEnv,
//     VITE_MICROCMS_DOMAIN: process.env.VITE_MICROCMS_DOMAIN,
//   };
// });

// afterEach(() => {
//   // テスト終了後に元の環境を復元します
//   process.env = originalEnv;
// });
