const addDays = require("date-fns/addDays");

const getDate = function (x) {
  let newDate = addDays(new Date("22 Aug 2020"), x);
  let month = newDate.getMonth() + 1;
  let result =
    //   newDate.toLocaleDateString();
    newDate.getDate() + "-" + month + "-" + newDate.getFullYear();
  return result;
};

// console.log(getDate(5));

module.exports = getDate;
