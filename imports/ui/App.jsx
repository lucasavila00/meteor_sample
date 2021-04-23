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
/*
import { meteorPromise } from "./Helpers";
import { useEffect } from "react";

useEffect(() => {
  meteorPromise("getConfig").then((config) => {
    console.log(config);
  });
}, []);

const onSave = async (config) => {
  await meteorPromise("onSaveConfig", { config });
};


const saveButton = (
  <button
    onClick={() =>
      onSave({
        color: "blue",
        shape: "cross",
        opacityConfig: "half_opacity",
      })
    }
  >
    Save Config To DB
  </button>
);
*/
