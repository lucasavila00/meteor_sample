//@ts-check
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

const Configs = new Mongo.Collection("configs");
const CFG_ID = "cfg_id";
const saveToDb = (config) =>
  Configs.update({ _id: CFG_ID }, { $set: config }, { upsert: true });
export const getFromDb = () => Configs.findOne({ _id: CFG_ID });
Meteor.startup(() => {
  saveToDb({
    color: "aliceblue",
    shape: "square",
    opacityConfig: "half_opacity",
  });
});
