import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //router 선언
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap을 사용하기 위한 cdn 선언

import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Cards from './pages/Cards';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM.jsx';
import Pagination from './pages/Pagination.jsx';
import List from './pages/List.jsx';
import Collapse from './pages/Collapse.jsx';
import Form from './pages/Form.jsx';
// import React from 'react';
// import App from './App';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}> {/*path: 경로, header*/}
          <Route index element={<Home />} /> {/*첫페이지, body*/}
          <Route path="container" element={<Cont />} />
          <Route path="typo" element={<Typo />} />
          <Route path="color" element={<Color />} />
          <Route path="table" element={<Table />} />
          <Route path="img" element={<Img />} />
          <Route path="jumbo" element={<Jumbo />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="btn" element={<Btn />} />
          <Route path="badges" element={<Badges />} />
          <Route path="progress" element={<Progress />} />
          <Route path="cards" element={<Cards />} />
          <Route path="layer" element={<Layer />} />
          <Route path="toastm" element={<ToastM />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="list" element={<List />} />
          <Route path="collapse" element={<Collapse />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />); /*react 18버전부터*/