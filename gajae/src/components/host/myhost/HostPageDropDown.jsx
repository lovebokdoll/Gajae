import React from 'react';

const HostPageDropDown = () => {
  const signOut = () => {
    console.log('signOut');
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        HOSTPAGE
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link to="/host/myhostpage">계정 관리</Link>
        <br />
        <Link to="/host/myhotelpage">숙소 관리</Link>
        <br />
        <button onClick={signOut}>LOGOUT</button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HostPageDropDown;
