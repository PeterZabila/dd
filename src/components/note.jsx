/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import {forwardRef} from "react";

const Note = forwardRef(({content, initialPos, ...props}, ref) => {
  return (
    <div
    className="border rounded border-slate-200 bg-slate-100 hover:bg-slate-200 hover:scale-110 transition duration-300"
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,

        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move"
      }}
      {...props}
    >
      📌 {content}
    </div>
  );
});

export default Note;