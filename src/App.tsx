import {Route, Routes} from 'react-router-dom';
import {ConfigProvider, theme} from 'antd';


import {Header} from './shared/components/Header';
import {Main} from './shared/components/Main';

import {HomePage} from './pages/HomePage';
import {NotFound} from './pages/NotFound';
import {useTheme} from "./features/theme/lib/useTheme";
import {Theme} from "./features/theme";

function App() {
  const appTheme = useTheme();

  const antTheme = appTheme[0] === Theme.LIGHT ? 'defaultAlgorithm' : 'darkAlgorithm';

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme[antTheme],
        }}
      >
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={
              <HomePage />
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </ConfigProvider>
    </>
  );
}

export default App;
