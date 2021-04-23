//@ts-check
import React from "react";
import { DrawRenderer } from "./Draw";

export const App = () => {
  const opacityConfig = "half_opacity";
  const onChangeOpacityConfig = (ev) => alert(ev.target.value);

  return (
    <div>
      <DrawRenderer shape="square" color="red" opacityConfig={opacityConfig} />
      <DrawRenderer shape="circle" color="green" opacityConfig="full_opacity" />
      <DrawRenderer shape="cross" color="blue" opacityConfig="half_opacity" />
      <select value={opacityConfig} onChange={onChangeOpacityConfig}>
        <option value="full_opacity">Full Opacity</option>
        <option value="half_opacity">Half Opacity</option>
      </select>
    </div>
  );
};
