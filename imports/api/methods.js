//@ts-check
import { Meteor } from "meteor/meteor";
import { getFromDb } from "./db";

const delay = (ms) => new Promise((rs) => setTimeout(rs, ms));
Meteor.methods({
  getConfig: async () => {
    await delay(1000);
    return getFromDb();
  },
  onSaveConfig: async ({ config }) => {
    await delay(1000);
    console.log({ config });

    // to save: saveToDb(config);
  },
});
