// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-dropdown-select';
import { languages } from './../../utilities/options';

const LanguageButtons = function () {
  const { i18n } = useTranslation();
  const [fild, setFild] = useState({});

  // useEffect(() => {
  //   setFild(lang);
  // }, [setFild]);

  // const getCourses = () => {
  //   return setFild(languag);
  // };

  const setValues = values => {
    const [value] = values;

    if (value.value !== i18n.resolvedLanguage) {
      setFild({ ...values });
      i18n.changeLanguage(value.value);
    }
  };

  // const handleCurrentClose = event => {
  //   const trim = (str, chars) => str.split(chars).filter(Boolean).join(chars).toLowerCase();
  //   const currentLang = trim(event.target.ariaLabel, ' ');

  //   if (fild.value !== i18n.resolvedLanguage) {
  //     i18n.changeLanguage(fild.value);
  //     setFild(fild);
  //   }
  // };

  return (
    <div className='language-buttons'>
      <Select
        placeholder={[languages.find(opt => opt.value === i18n.resolvedLanguage)].label}
        options={languages}
        searchable={false}
        multi={false}
        values={[languages.find(opt => opt.value === i18n.resolvedLanguage)]}
        labelField={fild.label}
        valueField={fild.value}
        onChange={setValues}
        noDataLabel='No matches found'
      />
    </div>
  );
};

export default LanguageButtons;
