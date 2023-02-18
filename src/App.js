import './App.css';
import Photo from './component/ProfilePhoto';
import Adress from './component/Adress';
import Name from './component/FullName';
function App() {
  return (
    <div className="App">
  <Photo></Photo>
  <Name/>
  <Adress/>
    </div>
  );
}
export default App;
