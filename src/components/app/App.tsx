import CustomFooter from 'components/footer/CustomFooter';
import Home from 'components/home/Home';
import CountrySelect from 'components/navbar/countrySelect/CountrySelect';
import CustomNavbar from 'components/navbar/CustomNavbar';
import NotFound from 'components/notFound/NotFound';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('us');

  return (
    <>
      <CustomNavbar variant="light" selectedCountryCode={selectedCountryCode} />
      <ToastContainer position="bottom-right" newestOnTop transition={Flip} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountrySelect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CustomFooter />
    </>
  );
};

export default App;
