import React from 'react';
import FlipperCard from 'components/FlipperCard';
import { skills } from 'store/data.js';

const { management, soft, hard } = skills;
const dataList = [
  {
    title: 'Technology',
    data: hard
  },
  {
    title: 'Tools',
    data: soft
  },
  {
    title: 'Managment',
    data: management
  }
];

const Development = () => {
  const dataListSet = dataList.map(item => (
    <FlipperCard title={item.title} key={item.title} data={item.data} />
  ));
  return (
    <section className='development-page page-wrapper'>{dataListSet}</section>
  );
};

export default Development;
