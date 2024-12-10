import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/logo.svg" alt="Logo" style={{ marginRight: "10px" }} />
        <h2 style={{ margin: "0" }}>FerryMan</h2>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header