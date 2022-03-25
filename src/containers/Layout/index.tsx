import React from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps): JSX.Element {
  return (
    <div className="App-wrapper vh-100 d-flex justify-content-center align-items-center">
      <div className="App-main">{children}</div>
    </div>
  );
}

export default Layout;
