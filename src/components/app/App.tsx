import Home from 'components/home/Home';
import DarkNavbar from 'components/navbar/DarkNavbar';
import NotFound from 'components/notFound/NotFound';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <DarkNavbar />
    <Container fluid>
      <ToastContainer position="bottom-right" newestOnTop transition={Flip} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  </>
);

export default App;
