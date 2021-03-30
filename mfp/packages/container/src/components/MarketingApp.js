import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const pathName = history.location;

        if (pathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
  });

  return <div ref={ref} />;
};

//This approach can be used in every framework that can render content in a Dom
