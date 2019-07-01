import { errorNoURLParam, errorNoValidURLParam } from '../constants/errors';

/**
 * Function to validate the params to the utility
 */
export default function paramValidation(url) {
  if (!url) {
    throw new Error(errorNoURLParam.key);
  }
  if (!url.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/)) {
    throw new Error(errorNoValidURLParam.key);
  }
}
