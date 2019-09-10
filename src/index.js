import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./components/Header"
import Menu from './components/Menu';
const App = () => {
  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <section className="main">
          <Menu />
        </section>

      </div>
    </div>

  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
