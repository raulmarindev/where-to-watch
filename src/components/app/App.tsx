import Home from 'components/home/Home';
import NotFound from 'components/notFound/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <ToastContainer position="bottom-right" newestOnTop transition={Flip} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </>
);

export default App;
