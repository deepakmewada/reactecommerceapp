import React, {Component} from 'react';
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

var section = {
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#f7f7f7"
};

class PackageSec extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          qty: 0
        };
        this.add = this.add.bind(this);
      }
    
      componentDidMount() {
        fetch("http://www.mocky.io/v2/5bc437053000005c007587b7")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      add() {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    

    render() {
        const { error, isLoaded, items } = this.state;
        function myFunction() {
            const packageLink = document.querySelector("#packLink");
            if(packageLink.classList.contains("active")){                  
        }
        else{
            if(items.length > 3){
                items.splice(3);
           }
        }
        }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        myFunction()
    }



        return (
            <div>
                <section style={section}>
                <h2>Our Packages</h2>
                <Grid>
                <p id="demo"></p>
                    <Row>
                    {items.map(item => (
                    <Col xs={6} md={4} >
                    
                            <Thumbnail href="#" alt="" src="https://dummyimage.com/1600x200/000000/fff.jpg" key={item.name}>
                                <h4>{item.name} </h4>
                                <Row>
                                <Col xs={7} className="text-left">
                                <p>{item.desc}</p>
                                </Col>
                                <Col xs={5}>Rs. {item.price}</Col>
                                </Row>
                                <Button onClick={this.add}>Buy</Button>
                                {this.state.qty}
                            </Thumbnail>
                          
                        </Col>
                          ))}
                    </Row>
                    <Link to="/packages"><Button bsStyle="danger">More Packages</Button></Link>
                </Grid>
                <div><span></span></div>
                </section>
            </div>
        )
    }
}

export default PackageSec;