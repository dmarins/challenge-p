import React from "react";

const PageTitle = (props) => {
  React.useEffect(() => {
    document.title = `Challenge | ${props.title}`;
  }, [props]);

  return <></>;
};

export default PageTitle;
