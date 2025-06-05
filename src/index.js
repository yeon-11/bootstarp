import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './include/Header';

// Pages
import Home from './pages/Home';
import Hooks from './pages/Hooks.jsx';
import Effect from './pages/Effect.jsx';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Flex from './pages/Flex.jsx';
import Flex2 from './pages/Flex2.jsx';

// Component etc
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Alerts from './pages/Alerts';
import Cards from './pages/Cards';
import Form from './pages/Form.jsx';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM.jsx';
import Pagination from './pages/Pagination.jsx';
import List from './pages/List.jsx';
import Collapse from './pages/Collapse.jsx';

// ReactBootstrap
import Buttons from './boot/Buttons.js';
import Acc from './boot/Acc.js';
import Tabss from './boot/Tabss.js';
import Modals from './boot/Modals.js';
import Fig from './boot/Fig.js';
import Tb from './boot/Tb.js';
import Pagen from './boot/Pagen.jsx';
import Ref from './boot/Ref.jsx';
import Ts from './boot/Ts.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}> 
          <Route index element={<Home />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="effect" element={<Effect />} />
          <Route path="container" element={<Cont />} />
          <Route path="typo" element={<Typo />} />
          <Route path="color" element={<Color />} />

          {/* Flex */}
          <Route path="flex" element={<Flex />} />
          <Route path="flex2" element={<Flex2 />} />

          {/* Component etc */}
          <Route path="btn" element={<Btn />} />
          <Route path="badges" element={<Badges />} />
          <Route path="progress" element={<Progress />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="cards" element={<Cards />} />
          <Route path="form" element={<Form />} />
          <Route path="table" element={<Table />} />
          <Route path="img" element={<Img />} />
          <Route path="jumbo" element={<Jumbo />} />
          <Route path="layer" element={<Layer />} />
          <Route path="toastm" element={<ToastM />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="list" element={<List />} />
          <Route path="collapse" element={<Collapse />} />

          {/* ReactBootstrap */}
          <Route path="buttons" element={<Buttons />} />
          <Route path="acc" element={<Acc />} />
          <Route path="tabs" element={<Tabss />} />
          <Route path="modals" element={<Modals />} />
          <Route path="fig" element={<Fig />} />
          <Route path="tb" element={<Tb />} />
          <Route path="pagen" element={<Pagen />} />
          <Route path="ref" element={<Ref />} />
          <Route path="ts" element={<Ts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
