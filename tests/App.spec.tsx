process.env.VITE_MICROCMS_API_KEY;
process.env.VITE_MICROCMS_ENDPOINT_PERSONAL;
process.env.VITE_MICROCMS_ENDPOINT_BUSINESS;
process.env.VITE_MICROCMS_DOMAIN;

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../src/pages/About';
import { Works } from '../src/pages/Works';
import { Personal } from '../src/pages/Personal';
import { PersonalType } from '../src/types/PersonalType';
import { isURLEnabled } from '../src/features/isURLEnabled';
import App from '../src/App';
import { Main } from '../src/pages/Main';
import { NotFoundPage } from '../src/pages/404';
import { PersonalDetails } from '../src/pages/PersonalDetails';
import { BusinessDetails } from '../src/pages/BusinessDetails';
import { Business } from '../src/pages/Business';
import { BusinessType } from '../src/types/BusinessType';
import { Header } from '../src/layouts/Header/Header';
import { Footer } from '../src/layouts/Footer/Footer';
import { Loading } from '../src/components/Animation/Loading';
import { Pagination } from '../src/layouts/Pagination/Pagination';

// ダミーデータ（personalデータ）
const dummyPersonalPosts: PersonalType[] = [
  {
    id: '1',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00',
    publishedAt: '2024-01-01T00:00:00',
    revisedAt: '2024-01-01T00:00:00',
    name: 'ダミープロダクト1',
    image: {
      url: 'ダミーURL1',
      height: 100,
      width: 100,
    },
    details: 'ダミープロダクト1の詳細',
  },
];

// ダミーデータ（businessデータ）
const dummyBusinessPosts: BusinessType[] = [
  {
    id: '1',
    createdAt: '2024-02-19T03:32:54.641Z',
    updatedAt: '2024-02-20T08:49:54.454Z',
    publishedAt: '2024-02-19T03:32:54.641Z',
    revisedAt: '2024-02-20T08:49:54.454Z',
    name: 'ダミーシステムの開発',
    period: 'ダミーヵ月',
    details: '<h1>ダミープロダクト1の詳細</h1>',
  },
];

// Appコンポーネントのテスト
describe('Appコンポーネントのテスト', () => {
  test('Appページのレンダーテスト', () => {
    render(<App />);
  });
});

// Headerコンポーネントのテスト
describe('Headerコンポーネントのテスト', () => {
  test('Headerコンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test('Headerページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Headerコンポーネントの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('works')).toBeInTheDocument();
  });

  test('HeaderページにLinkが3つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(3);
  });

  test('Headerのパステスト', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('about').closest('a')).toHaveAttribute(
      'href',
      '/about'
    );
    expect(screen.getByText('works').closest('a')).toHaveAttribute(
      'href',
      '/works'
    );
  });
});

// Footerコンポーネントのテスト
describe('Footerコンポーネントのテスト', () => {
  test('Footerコンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  test('Footerページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Footerコンポーネントの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(
      screen.getByText("© 2024 Seiya's portfolio site")
    ).toBeInTheDocument();
    expect(screen.getByText('github')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
  });

  test('FooterページにLinkが3つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(2);
  });

  test('Footerのパステスト', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText('github').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/ookuraseiya'
    );
    expect(screen.getByText('contact').closest('a')).toHaveAttribute(
      'href',
      'mailto:seiya.ookura@gmail.com?'
    );
  });
});

// Loadingコンポーネントのテスト
describe('Loadingコンポーネントのテスト', () => {
  test('Loadingのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    );
  });
});

describe('Paginationコンポーネントのテスト', () => {
  test('Paginationのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Pagination currentPageId={1} paginationNumber={10} pageUrl="test" />
      </BrowserRouter>
    );
  });

  test('Paginationコンポーネントのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Pagination currentPageId={1} paginationNumber={10} pageUrl="test" />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Paginationの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Pagination currentPageId={1} paginationNumber={10} pageUrl="test" />
      </BrowserRouter>
    );
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
    expect(screen.getByText('1 / 10')).toBeInTheDocument();
  });

  test('Paginationのパステスト', () => {
    render(
      <BrowserRouter>
        <Pagination currentPageId={1} paginationNumber={10} pageUrl="test" />
      </BrowserRouter>
    );
    expect(screen.getByText('<').closest('a')).toHaveAttribute(
      'href',
      '/test/0'
    );
    expect(screen.getByText('>').closest('a')).toHaveAttribute(
      'href',
      '/test/2'
    );
  });

  test('PaginationコンポーネントにLinkが2つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Pagination currentPageId={1} paginationNumber={10} pageUrl="test" />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(2);
  });
});

// Mainコンポーネントのテスト
describe('Mainコンポーネントのテスト', () => {
  test('Mainページのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  });

  test('Mainページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Mainページの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('MaintページにLinkが4つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(4);
  });
});

// Aboutコンポーネントのテスト
describe('Aboutコンポーネントのテスト', () => {
  test('Aboutページのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  test('Aboutページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Aboutページの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByTestId('skill')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('AboutページにLinkが5つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(5);
  });
});

// Worksコンポーネントのテスト
describe('Worksコンポーネントのテスト', () => {
  test('Worksページのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <Works />
      </BrowserRouter>
    );
  });

  test('Worksページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Works />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('WorksページにLinkが7つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Works />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(7);
  });
});

// Personalコンポーネントのテスト
describe('Personalコンポーネントのテスト', () => {
  const mockResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue(dummyPersonalPosts),
  };

  test('Personalコンポーネントのレンダー&スナップショットテスト', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    await waitFor(() => {
      const { asFragment } = render(
        <BrowserRouter>
          <Personal />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

// PersonalDetailsコンポーネントのテスト
describe('PersonalDetailsコンポーネントのテスト', () => {
  const mockResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue({ contents: dummyPersonalPosts }),
  };

  test('PersonalDetailsコンポーネントのレンダー&スナップショットテスト', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    await waitFor(() => {
      const { asFragment } = render(
        <BrowserRouter>
          <PersonalDetails />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

// Businessコンポーネントのテスト
describe('Businessコンポーネントのテスト', () => {
  const mockResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue(dummyBusinessPosts),
  };

  test('Businessコンポーネントのレンダー&スナップショットテスト', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    await waitFor(() => {
      const { asFragment } = render(
        <BrowserRouter>
          <Business />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

// BusinessDetailsコンポーネントのテスト
describe('BusinessDetailsコンポーネントのテスト', () => {
  const mockResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue({ contents: dummyBusinessPosts }),
  };

  test('BusinessDetailsコンポーネントのレンダー&スナップショットテスト', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    await waitFor(() => {
      const { asFragment } = render(
        <BrowserRouter>
          <BusinessDetails />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

// 404コンポーネントのテスト
describe('404コンポーネントのテスト', () => {
  test('404ページのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
  });

  test('404ページのスナップショットテスト', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('404ページの子コンポーネントのレンダーテスト', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
  6;
  test('404ページにLinkが4つあるか', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(6);
  });
});

// isURLEnabled関数のテスト
describe('isURLEnabled判定のテスト', () => {
  test('isURLEnabledのtrue判定', () => {
    const id = 2;
    const paginationNumber = 3;
    expect(isURLEnabled(id, paginationNumber)).toBe(true);
  });

  test('idが0の時（false判定）', () => {
    const id = 0;
    const paginationNumber = 3;
    expect(isURLEnabled(id, paginationNumber)).toBe(false);
  });

  test('idがpaginationNumberより値が大きい時（false判定）', () => {
    const id = 4;
    const paginationNumber = 3;
    expect(isURLEnabled(id, paginationNumber)).toBe(false);
  });
});
