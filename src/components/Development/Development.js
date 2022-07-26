import React from "react";
import FlipperСard from "components/FlipperСard";
import { skills } from "store/data.js";

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

const Development = () => {
    return (
      <section className="Development-page page-wrapper">
        {dataList.map((item) =>
          <FlipperСard title={item.title} key={item.title} data={item.data} />
        )}
      </section>
    );
}

export default Development;
