import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

var jumbotronStyle = {
    marginBottom: "0"
};

class Banner extends Component {
    render() {
        return(
            <div>
                <Jumbotron text-center style={jumbotronStyle}>
                    <div className="container">
                    <h1>Hello World</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <Button  bsSize="large">Register</Button>
                    </div>
                </Jumbotron>
            </div>
        ) 
        
    }
}

export default Banner ;