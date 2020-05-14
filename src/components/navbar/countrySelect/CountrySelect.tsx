import countries from './countries';
import { Container, Jumbotron } from 'imports/bootstrap';
import jss from 'jss';
import ICountry from 'models/ICountry';
import React, { useEffect, useState } from 'react';
import Autosuggest, { ChangeEvent, SuggestionSelectedEventData, SuggestionsFetchRequestedParams } from 'react-autosuggest';
import styled from 'styled-components';
import escapeRegexCharacters from 'utils/utils';

const JumbotronStyled = styled(Jumbotron)`
min-height: 300px;
background-color: #ECECEC;
`;

const fontSize = '16px';
const borderColor = '#aaa';
const borderRadius = '.3rem';

const sheet = jss.createStyleSheet({
  container: {
    position: 'relative',
    height: '100%',
    width: '282px',
    margin: 'auto',
  },

  input: {
    width: '282px',
    height: '40px',
    padding: '10px 20px',
    'font-weight': '300',
    'font-size': `${fontSize}`,
    border: `1px solid ${borderColor}`,
    'border-radius': `${borderRadius}`,
    '-webkit-appearance': 'none',

    '&::-ms-clear': {
      display: 'none',
    },
  },

  inputOpen: {
    'border-bottom-left-radius': '0',
    'border-bottom-right-radius': '0',
  },

  inputFocused: {
    outline: 'none',
  },

  suggestionsContainer: {
    display: 'none',
  },

  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: '51',
    width: '282px',
    border: `1px solid ${borderColor}`,
    'background-color': '#fff',
    'font-weight': '300',
    'font-size': `${fontSize}`,
    'border-bottom-left-radius': `${borderRadius}`,
    'border-bottom-right-radius': `${borderRadius}`,
    'z-index': '2',
    'max-height': 'calc("100%" - 52px)',
    'overflow-y': 'auto',
    'margin-bottom': '75px',
  },

  suggestionsList: {
    margin: '0',
    padding: '0',
    'list-style-type': 'none',
  },

  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px',
  },

  suggestionHighlighted: {
    'background-color': '#ddd',
  },

  sectionContainer: {
    'border-top': '1px dashed #ccc',
  },

  sectionContainerFirst: {
    'border-top': '0',
  },

  sectionTitle: {
    padding: '10px 0 0 10px',
    'font-size': '12px',
    color: '#777',
  },
}).attach();

const getSuggestions = (value: string) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return countries;
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return countries.filter((country) => regex.test(country.name));
};

const handleGetSuggestionValue = (suggestion: ICountry) => suggestion.name;

const handleRenderSuggestion = (suggestion: ICountry) => suggestion.name;

interface ICountrySelectProps {
  // eslint-disable-next-line max-len
  onSuggestionSelected: (_event: React.FormEvent<any>, { suggestion }: SuggestionSelectedEventData<ICountry>) => void;
}

const CountrySelect: React.FC<ICountrySelectProps> = ({ onSuggestionSelected }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState(countries);

  const onChange = (_event: React.FormEvent<any>, { newValue }: ChangeEvent) => {
    setValue(newValue);
  };

  // eslint-disable-next-line max-len
  const handleSuggestionsFetchRequested = ({ value: sugestionValue }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(sugestionValue));
  };

  let input: HTMLInputElement | undefined;

  useEffect(() => input?.focus(), [input]);

  const storeInputReference = (autosuggest: Autosuggest) => {
    if (autosuggest !== null) {
      input = autosuggest.input;
    }
  };

  const inputProps = {
    placeholder: 'Type to filter',
    value,
    onChange,
  };

  return (
    <JumbotronStyled className="mb-3 mb-md-4 py-5 h-100">
      <Container>
        <h5 className="text-black-50 text-center mb-3">Please select a country:</h5>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={handleGetSuggestionValue}
          renderSuggestion={handleRenderSuggestion}
          inputProps={inputProps}
          alwaysRenderSuggestions
          theme={sheet.classes}
          ref={storeInputReference}
        />
      </Container>
    </JumbotronStyled>
  );
};

export default CountrySelect;
