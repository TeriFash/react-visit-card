// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguageButtons = () => {
  // Change language with buttons
  // const { i18n } = useTranslation("navbar");
  // return (
  //   <div>
  //     <button className="button" onClick={() => i18n.changeLanguage("en")}>
  //       EN
  //     </button>
  //     <button className="button" onClick={() => i18n.changeLanguage("es")}>
  //       ES
  //     </button>
  //     <button className="button" onClick={() => i18n.changeLanguage("cat")}>
  //       CAT
  //     </button>
  //   </div>
  // );

  //Change language with select
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'uah',
      name: 'UA'
    },
    {
      code: 'en',
      name: 'EN'
    },
    {
      code: 'ru',
      name: 'RU'
    }
  ];

  return (
    <section className='language-buttons'>
      <FontAwesomeIcon className='language-buttons__icon' icon={'fas fa-arrow-down'} />
      <select
        id='ddlProducts'
        name='ddProducts'
        className='language-buttons__select'
        defaultValue={i18n.resolvedLanguage}
        onChange={e => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        {languages.map(({ code, name }) => {
          return (
            <option className='language-buttons__option' key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default LanguageButtons;
