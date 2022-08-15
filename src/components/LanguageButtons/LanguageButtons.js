// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-dropdown-select';

// function SelectSection(props) {
//   // return <button onClick={props.handleClick}>{props.name}</button>
//   return (
//     <Select
//       placeholder='Select language'
//       options={props.options()}
//       searchable={false}
//       multi={false}
//       values={props.languages}
//       labelField={props.setValues()}
//       valueField={props.setValues()}
//       onChange={props.changeValues}
//       noDataLabel='No matches found'
//     />
//   );
// }

// class LanguageButtons extends React.Component {

//   state = {
//     num: 0
//   }

//   languages = [
//     {
//       code: 'uah',
//       name: 'UA'
//     },
//     {
//       code: 'en',
//       name: 'EN'
//     },
//     {
//       code: 'ru',
//       name: 'RU'
//     }
//   ]

//   handleIncrement = () => {
//     this.setState({
//       num: this.state.num + 1
//     })
//   }

//   handleDecrement = () => {
//     this.setState({
//       num: this.state.num - 1
//     })
//   }

//   render() {
//     return (
//       <div className='language-buttons'>
//         <SelectSection handleClick={this.handleDecrement} labelField={handleDecrement} />
//       </div>
//     )
//   }
// }

const LanguageButtons = function () {
  const languages = [
    {
      id: 1,
      value: 'uah',
      label: 'UA'
    },
    {
      id: 2,
      value: 'en',
      label: 'EN'
    },
    {
      id: 3,
      value: 'ru',
      label: 'RU'
    }
  ];

  // const options = () =>
  //   languages.map(item => ({
  //     label: item.label,
  //     value: item.value
  //   }));

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

  // const setValues = () => languages.find(opt => opt.code === resolvedLanguage);
  // const changeValues = event => i18n.changeLanguage(event);

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
// {
//   /* <select
//         id='ddlProducts'
//         name='ddProducts'
//         className='language-buttons__select'
//         defaultValue={i18n.resolvedLanguage}
//         onChange={e => {
//           i18n.changeLanguage(e.target.value);
//         }}
//       >
//         {languages.map(({ code, name }) => {
//           return (
//             <option className='language-buttons__option' key={code} value={code}>
//               {name}
//             </option>
//           );
//         })}
//       </select> */
// }
