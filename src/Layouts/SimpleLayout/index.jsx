import React from "react";
import { Outlet } from "react-router-dom";

function SimpleLayout() {
  return (
    <div>
      <div>Something</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SimpleLayout;
