import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log("The Container noticed navigation in Marketing");
      },
    });
  });

  return <div ref={ref} />;
};

//This approach can be used in every framework that can render content in a Dom
