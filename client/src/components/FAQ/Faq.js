import React, { Component } from "react";
import "./css/faq.css";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import Title from '../Reusable/Title/Title'

export default class Faq extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
          <Title headerTitle="Got Questions? We Got Answers!"/>
        <Accordion eventKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="" eventKey="0">
                How Do I Create My Account?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                If you don't have a StudioHunt account yet, go to
                studio-hunt.com and click Sign Up. You can sign up using your
                email address, Facebook account, Google account, Instagram
                account or Amazon Account. Signing up and creating a StudioHunt
                account is free.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="" eventKey="1">
                How Do I Book A Studio?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="" eventKey="2">
                How Do I Cancel A Reservation?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="" eventKey="3">
              What should I do if someone asks me to pay outside of the Studio Hunt application?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="" eventKey="4">
             Is it free to List My Studio?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
      </Container>
    );
  }
}
