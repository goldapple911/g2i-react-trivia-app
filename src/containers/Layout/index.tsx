import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <div className="App-wrapper">{children}</div>
    </div>
  );
}

export default Layout;
