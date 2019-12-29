import React, { Component } from "react";
import "./css/faq.css";
import { Accordion, Card, Button, Container } from "react-bootstrap";

export default class Faq extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Accordion defaultActiveKey="0">
      
              <Accordion.Toggle as={Button} variant="" eventKey="0">
                How Do I Create My Account?
              </Accordion.Toggle>
         
            <Accordion.Collapse eventKey="0">
             
                If you don't have an StudioHunt account yet, go to
                studio-hunt.com and click Sign Up. You can sign up using your
                email address, Facebook account, Google account, Instagram
                account or Amazon Account. Signing up and creating a StudioHunt
                account is free.
            
            </Accordion.Collapse>
   
              <Accordion.Toggle as={Button} variant="" eventKey="1">
                How Do I Book A Studio
              </Accordion.Toggle>
         
            <Accordion.Collapse eventKey="1">
             Hello! I'm another body
            </Accordion.Collapse>
       
        </Accordion>
      </Container>
    );
  }
}
