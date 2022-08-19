import React from 'react';
import FlipperCard from 'components/FlipperCard';
import { skillsList } from 'data';

const Development = () => {
  return (
    <section className='development-page page-wrapper'>
      {skillsList.map(item => (
        <FlipperCard title={item.title} key={item.title} data={item.data} />
      ))}
    </section>
  );
};

export default Development;
