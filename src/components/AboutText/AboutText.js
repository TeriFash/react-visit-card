import React, { useState, useEffect, useRef } from "react";
import Firebase from "firebase/app";

const TextBlock = ({ items, fallback }) => {

  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map((item, i) => {
      return (
        <p className="text-item" key={i}>
          <>
            {item}
          </>
        </p>
      );
    });
  }
}

const AboutText = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let db = Firebase.firestore();

    db.collection("about").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        setItems(doc.data());
      });
    });
  }, [items]);

  const [firstLoad, setLoaded] = useState(false);
  useEffect(() => {
    document.querySelector('.Btn-upload-wrapper').classList.add('is-down')
    setPosition()
  }, []);

  const containerRef = useRef();
  let externalBtn = document.querySelector('.Btn-upload-wrapper')
  let valueClass = firstLoad ? '' : 'is-down'

  function setPosition(val = !firstLoad) {
    const patch = containerRef.current

    if(val) {
      patch.style.transform = `translateY(60%)`;
    } else {
      patch.style.transform = "";
    }

    console.log("--- containerRef", containerRef);
  }


  const clickMore = (event) => {
    setLoaded((firstLoad) => !firstLoad)
    externalBtn.classList.toggle('is-down')
    setPosition(firstLoad)
  };

  return (
    <div className={`About-text ${valueClass}`} ref={containerRef}>
      <h4>{items.title}</h4>
      <TextBlock items={items.text} fallback={"Loading..."} />
      {!items || items.length === 0 || (
        <button onClick={clickMore}>More</button>
      )}
    </div>
  );
}

export default AboutText;
