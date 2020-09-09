import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ruins from "../assets/images/Ruins_of_Thundertree-map.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <div className="App">
              <header className="App-header">
                <div className="row">
                  <div className="col-md-8">
                    <img
                      src={ruins}
                      className="img-fluid"
                      alt="Ruins of Thundertree"
                    />
                  </div>
                </div>
              </header>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
