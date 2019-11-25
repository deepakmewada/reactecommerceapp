import React, { Component } from 'react';
import {FormGroup, Grid, Row, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';

var section = {
    paddingTop: "40px",
    paddingBottom: "40px"
};


class Contact extends Component {
    render() {
        return (
            <div>
                <section style={section} >
                <form>
                <FormGroup>
                <Grid>
                    <Row className="text-left">
                        <Col xs={6}>
                        <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" name="UName"></FormControl>{''}
                        </Col>
                        <Col xs={6}>
                        <ControlLabel>Email Id</ControlLabel>
                        <FormControl type="email" name="Email"></FormControl>{''}
                        </Col>
                        <Col xs={12}>
                            <ControlLabel>Requirement</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </Col>
                    </Row>
                    
                    <Button type="submit">Submit</Button>
                </Grid>
                </FormGroup>
                </form>
                
            </section>
            </div>
        )
    }
}

export default Contact;