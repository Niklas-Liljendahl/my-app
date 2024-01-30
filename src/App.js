import logo from './logo.svg';
import './App.css';

function App() {

  const testFunction = () => {
    console.log('CONSOLE.LOG!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="pinpoint-widget" data-apikey="hej123" data-onpress="test" data-submit={testFunction} />
      </header>
    </div>
  );
}

export default App;
