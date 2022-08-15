// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-dropdown-select';
import { languages } from './../../utilities/options';

const LanguageButtons = function () {
  // const languages = [
  //   {
  //     id: 1,
  //     value: 'uah',
  //     label: 'UA'
  //   },
  //   {
  //     id: 2,
  //     value: 'en',
  //     label: 'EN'
  //   },
  //   {
  //     id: 3,
  //     value: 'ru',
  //     label: 'RU'
  //   }
  // ];

  const { i18n } = useTranslation();

  const [value, setValue] = useState(
    () => languages.find(opt => opt.value === i18n.resolvedLanguage)?.label || 'Select'
  );
  const [fild, setFild] = useState({});

  const handleCurrentFild = event => {
    if (event.value !== i18n.resolvedLanguage) {
      i18n.changeLanguage(event.value);
      setValue(event.value);
      setFild(event);
    }
  };

  return (
    <div className='language-buttons'>
      <Select
        placeholder={value}
        options={languages}
        searchable={false}
        multi={false}
        labelField={fild.label}
        valueField={fild.value}
        onChange={handleCurrentFild}
        noDataLabel='No matches found'
      />
    </div>
  );
};

export default LanguageButtons;