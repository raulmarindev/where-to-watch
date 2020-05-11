import CustomFooter from 'components/footer/CustomFooter';
import Home from 'components/home/Home';
import CustomNavbar from 'components/navbar/CustomNavbar';
import NotFound from 'components/notFound/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <CustomNavbar variant="light" />
    <ToastContainer position="bottom-right" newestOnTop transition={Flip} />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
    <CustomFooter />
  </>
);

export default App;
