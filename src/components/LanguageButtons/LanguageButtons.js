// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Select from 'react-dropdown-select';
import { useTranslation } from 'react-i18next';
import { languages } from 'utilities/options';

const LanguageButtons = () => {
  const { t, i18n } = useTranslation('main');
  const [field, setField] = useState([languages.find(opt => opt.value === i18n.resolvedLanguage)]);

  const setValues = params => {
    const [fieldItem] = params;
    if (fieldItem.value !== i18n.resolvedLanguage) {
      setField(params);
      i18n.changeLanguage(fieldItem.value);
    }
  };

  return (
    <div className='language-buttons'>
      <Select
        placeholder={field}
        options={languages}
        searchable={false}
        multi={false}
        values={field}
        labelField={field.label}
        valueField={field.value}
        onChange={setValues}
        noDataLabel={t('titleNoMatchesFound')}
      />
    </div>
  );
};

export default LanguageButtons;
