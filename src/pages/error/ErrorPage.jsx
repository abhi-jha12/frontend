import React from "react";

const ErrorPage = (props) => {
  const err_msg=props.err
  return (
    <div className="flex flex-row bg-black m-10 p-10 text-center text-white text-3xl justify-center">
      <p>{err_msg}</p>
    </div>
  );
};

ErrorPage.defaultProps = {
  err: 'Coming Soon!!!',
}

export default ErrorPage;
