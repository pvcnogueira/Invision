import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import '../scss/Materialize/materialize.scss';
import '../scss/Home.scss';

import { Container, Row, Col } from 'react-bootstrap';
import Slider from "./Slider";
import Login from "./Login";
import Register from "./Register";

import banner from "../assets/images/banner.jpg";


const Home = (props) => {

  let { path } = useRouteMatch();

  const slideData = Array(3).fill(null).map(e => {
    return {
      src: banner,
      title: "Marcenas mattis egestas",
      description: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."
    }
  });

  return (
    <Container fluid className="mh-100 p-0">
      <Row className="m-0">
        <Col xs={12} md={6} className=" mh-100">
          <Slider data={slideData} />
        </Col>
        <Col xs={12} md={6} className="align-content-center login-container">
          <h1 className="title text-right">Invision</h1>
          <Row >
            <Col xs={12} xl={7} className="m-auto ">
              <Switch>
                <Route exact path={path}>
                  <Login />
                </Route>
                <Route path={`/register`}>
                  <Register />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
