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
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      certificate: [{ id: 0, editNameProductInput: "produit 1", editYearProductInput: "2012", editInformationsProduct: "no info", editLink: "htpp://www.google.fr" },
      { id: 1, editNameProductInput: "produit 2", editYearProductInput: "1950", editInformationsProduct: "it's an old product", editLink: "htpp://www.wikipedia.fr" },
      { id: 2, editNameProductInput: "produit 3", editYearProductInput: "2019", editInformationsProduct: "it's an new product", editLink: "htpp://www.apple/products/iphone/11-new.com" },
      { id: 3, editNameProductInput: "produit 4", editYearProductInput: "2007", editInformationsProduct: "Smart Fortwo", editLink: "htpp://www.smart/products/fortwo.com" }]
    }
  }
  changeCertificate = (newValue) => {
    console.log("before ", this.state.certificate)
    const certificates = [...this.state.certificate, { newValue }]
    this.setState({
      certificate: certificates
    })
    console.log("after ", this.state.certificate);
  }
  sendDatas() {
    return this.state.certificate
  }
  getId = (id) => {
    this.setState({
      id: id
    });
    console.log(this.state.id)
  }

  render() {
    const data = this.state.certificate;
    // console.log('datafrom render: ', data);
    return (
      <div className="app" >
        <Header />
        <section className="main">
          <Menu />
          <Models data={data} />
          <Edit onSubmit={this.changeCertificate} />
          <Recap data={this.state.certificate[this.state.id]} />
          {/* <div>
            <button onClick={() => this.getId(0)}>0</button>
            <button onClick={() => this.getId(1)}>1</button>
            <button onClick={() => this.getId(2)}>2</button>
          </div> */}
          {/* <button onClick={() => console.log(this.state.certificate)}>getform</button> */}
        </section>
      </div>
    )
  }
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
