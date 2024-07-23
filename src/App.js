import './styles/App.css';
import {TopArea} from './componetes/TopArea';
import {BodyArea} from './componetes/BodyArea';
import {BottomArea} from './componetes/BottomArea';

function App() {
  return (
    <div className="App">
      <div id="site">
        <TopArea/>
        <BodyArea/>
        <BottomArea/>
      </div>
    </div>
  );
}

export default App;
