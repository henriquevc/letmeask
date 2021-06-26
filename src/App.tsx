import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import './styles/global.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </BrowserRouter>
    </div>

  );
}

export default App;
