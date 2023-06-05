# React Vite Starter

## Getting started

1. Gets the git project. (Auto run installation)

```
  npx @relateit/react-vite-starter my-app
```

2. Start the dev server. And open http://127.0.0.1:5173/ in your browser.

```
  yarn dev
```

3. Build your product.

```
  yarn build
```

## Dependencies

-   React
-   Vite
-   Typescript
-   eslint
-   Prettier
-   @apollo/client
-   Graphql
-   React router dom
-   i18next

## Features

-   Localization

This boilerplate supports localization with built-in support for i18next. The localization files can be found under the public/locales directory, where you can add JSON files for as many languages as needed.

```ts
import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Nav: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="App-header">
            <button
                className="mr-2 cursor-pointer rounded-md p-2 text-primary shadow-md"
                onClick={() => changeLanguage(t('lang') === 'en' ? 'dk' : 'en')}
            >
                {t('lang') === 'en' ? 'dk' : 'en'}
            </button>
        </div>
    );
};
```

-   Routing

Routing is handled using the `react-router-dom` library. This allows for declarative routing and navigation within the application. Different routes are defined using the `Route` component, and the routing hierarchy is structured using the `Routes` and `Route` components.

```ts
import { ApolloProvider } from '@apollo/client';
import { client } from 'Apollo';
import { Layout } from 'Components/Layout';
import { Home, Login } from 'Pages';
import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RoutePaths from './RoutePath';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path={RoutePaths.Login} element={<Login />} />

                    <Route element={<Layout />}>
                        <Route path={RoutePaths.Home} element={<Home />} />
                        <Route path={RoutePaths.About} element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </ApolloProvider>
    );
};

export default App;
```

## Performance

-   fast development server

```bash
$ yarn dev

  VITE v4.3.9  ready in 675 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

-   fast build speed

```bash
$ yarn build

yarn run v1.22.18

$ tsc && vite build
vite v4.3.9 building for production...
✓ 335 modules transformed.
dist/index.html                   0.87 kB │ gzip:   0.43 kB
dist/assets/index-cb041eaa.css    7.51 kB │ gzip:   2.24 kB
dist/assets/index-a068d449.js   394.47 kB │ gzip: 120.52 kB
✓ built in 3.52s
Done in 6.64s.
```
