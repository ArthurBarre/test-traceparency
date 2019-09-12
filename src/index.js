import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./components/Header"
import Menu from './components/Menu';
import Edit from "./components/Edit";
import Models from './components/Models';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recap from './components/Recap';

const Dashboard = () => {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Menu />
        <Models />
        <Edit />
        <Recap />
      </section>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <Dashboard />
      </div>
    )
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
