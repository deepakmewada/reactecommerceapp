import React from 'react'; 
import PackageSec from './components/packageComp';
import './App.css';


class Packages extends React.Component {
  render() {
    return (
      <div className="Package">
        <PackageSec />
      </div>
    );
  }
}

export default Packages;
