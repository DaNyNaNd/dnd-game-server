import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ruins from "../assets/images/Ruins_of_Thundertree-map.jpg";

const Home = () => {
  const [selectedMap, setSelectedMap] = useState({ id: 0, name: "", src: "" });
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Sidebar selectMap={setSelectedMap} />
          </Col>
          <Col lg={9}>
            <div className="App">
              <header className="App-header">
                <div className="row">
                  <div className="col-md-8">
                    <img
                      src={selectedMap.src}
                      className="img-fluid"
                      alt={selectedMap.name}
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
