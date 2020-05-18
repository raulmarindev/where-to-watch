import Ips from 'api/agents/ips';
import CustomFooter from 'components/footer/CustomFooter';
import Home from 'components/home/Home';
import CountrySelect from 'components/navbar/countrySelect/CountrySelect';
import CustomNavbar from 'components/navbar/CustomNavbar';
import NotFound from 'components/notFound/NotFound';
import useTapToggle from 'hooks/useTapToggle';
import ICountry from 'models/ICountry';
import React, { useEffect, useState } from 'react';
import { SuggestionSelectedEventData } from 'react-autosuggest';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const countryCode = await Ips.getCurrentUserCountryCode();
      setSelectedCountryCode(countryCode);
    })();
  }, []);

  // eslint-disable-next-line max-len
  const handleSuggestionSelected = (_event: React.FormEvent<any>, { suggestion }: SuggestionSelectedEventData<ICountry>) => {
    setSelectedCountryCode(suggestion.code);
    navigate('/');
  };

  useTapToggle();

  return (
    <>
      <CustomNavbar variant="light" selectedCountryCode={selectedCountryCode} />
      <ToastContainer position="bottom-right" newestOnTop transition={Flip} />
      <main>
        <Routes>
          <Route path="/" element={<Home countryCode={selectedCountryCode} />} />
          <Route path="/countries" element={<CountrySelect onSuggestionSelected={handleSuggestionSelected} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CustomFooter />
    </>
  );
};

export default App;
