import React from "react";


const Cards = (props) => {
  return (
    <div class="{props.width} bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div class="col-span-2 text-lg font-bold capitalize rounded-md">
    card title
  </div>
  <div class="col-span-2 rounded-md">
    Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples
    of the Lorem ipsum placeholder text on 1960s advertising...
  </div>
  <div class="col-span-1">
  </div>
  </div>
  );
}
export default Cards;