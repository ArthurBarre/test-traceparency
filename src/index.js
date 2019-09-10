import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./components/Header"
import Menu from './components/Menu';
import Edit from "./components/Edit"
import Models from './components/Models'
const App = () => {
  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <section className="main">
          <Menu />
          <Models />
          <Edit />
        </section>

      </div>
    </div>

  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
