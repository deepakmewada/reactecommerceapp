import React from 'react'; 
import Header from './components/headerComp.js';
import Footer from './components/footerComp';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './AboutPg';
import Packages from './PackagePg';
import Login from './Login';

var pdTop = {
  marginTop: "51px"
}

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
        <div className="content" style={pdTop}>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Packages" component={Packages}/>
            <Route path="/Login" component={Login}/>
        </div>
        <Footer/>
      </div>
      </HashRouter>
    );
  }
}

export default App;
