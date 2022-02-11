import photo from './photo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={photo} className="photo" alt="me" />
      </header>
    </div>
  );
}

export default App;
