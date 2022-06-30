import './App.css';
import Buttons from '../Button/Button';
import Btn from '../Btn/Btn';

function App() {
  return (
    <div className="container">
      <h1>Hello, World</h1>
      <button className='red'>RED</button>
      <button className='green'>GREEN</button>
      <button className='blue'>BLUE</button>
      <Buttons />
      <Btn />
    </div>
  );
}

export default App;
