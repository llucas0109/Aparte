import React from "react";
import '../styleshets.css/style-contador.css';

function contador({ numclick }) {
  return(
    <div className="contador">
      {numclick}
    </div>
    );
}
export default contador;