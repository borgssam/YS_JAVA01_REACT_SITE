import { useState } from 'react';
import './styles/App.css';
import {TopArea} from './componetes/TopArea';
import {BodyArea} from './componetes/BodyArea';
import {BottomArea} from './componetes/BottomArea';

function App() {
  const [leftMenu, setLeftMenu] = useState(4);

  return (
    <div className="App">
      <div id="site">
        <TopArea setLeftMenu={setLeftMenu} />
        <BodyArea leftMenu={leftMenu} />
        <BottomArea/>
      </div>
    </div>
  );
}

export default App;
