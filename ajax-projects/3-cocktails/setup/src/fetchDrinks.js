import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url); // transform into a data we can work with
    const data = await response.json(); //returns a promise - workable data
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
