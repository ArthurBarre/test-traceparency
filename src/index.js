import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./components/Header"
import Menu from './components/Menu';
import Edit from "./components/Edit";
import Models from './components/Models';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recap from './components/Recap';
// import SelectBox from "./subComponents/SelectBox"
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
const Create = () => {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Menu />
        <Models />
        <Recap />
      </section>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.ModelSelect = new SelectBox(this);
  }
  state = {
    createWindow: true

  }
  getValue(selected) {
    if (selected === 3) {
      this._changeState()
    }
  }
  _changeState() {
    this.setState({ createWindow: true })
  }
  render() {
    return (
      <div className="appContainer">
        {
          this.state.createWindow ? <Dashboard /> : <Create />
        }

      </div>
    )
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
