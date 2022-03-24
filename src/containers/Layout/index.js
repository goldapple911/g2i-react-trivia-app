import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div className='App-wrapper'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
