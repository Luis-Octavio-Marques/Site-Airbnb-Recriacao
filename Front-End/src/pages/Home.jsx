import React from "react";
import Item from "../components/Item";

function Home() {
  return (
    <section>
      <div className="px-15 mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 rounded-2xl py-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default Home;
