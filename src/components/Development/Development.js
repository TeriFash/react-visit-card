import React from "react";
import FlipperСard from "../FlipperСard";
import { skills } from "../../store/data";
// import { useLocation  } from 'react-router-dom';

// const location = useLocation();

// function Locate() {
//   const location = useLocation();
//   useEffect(() => {
//     const currentPath = location.pathname;
//   }, [location]);
//   return <p>Profile</p>;
// }

const Development = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   console.log('-----location in', location);

  // }, [location]);

  // console.log('-----location', location.pathname);

  const { managment, soft, hard} = skills;
    const dataList = [{
      title: 'Technology',
      data: hard
    },
    {
      title: 'Tools',
      data: soft
    },
    {
      title: 'Managment',
      data: managment
    }]
    
    return (
      <section className="Development-page page-wrapper">
        {dataList.map((item) =>
            <FlipperСard title={item.title} key={item.title} data={item.data} />
        )}
      </section>
    );
}

export default Development;
