//@ts-check
import { Meteor } from "meteor/meteor";

export const meteorPromise = (method, args) => {
  return new Promise((resolve, reject) => {
    Meteor.call(method, args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
