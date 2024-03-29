import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { navigation } from './navigation';
import { ForexPage } from './pages/ForexPage';

const paths = [
  {
    path: navigation.home.href,
    element: <HomePage />
  },
  {
    path: navigation.forex.href,
    element: <ForexPage />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          {paths.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
