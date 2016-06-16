'use strict';

var prefix = 'tw_';
// var current_waste = localStorage.getItem(prefix + 'current_waste') || 0;
var current_waste = 0;
var alltime_waste = localStorage.getItem(prefix + 'alltime_waste') || 0;

setInterval(increase, 1000);
setInterval(store, 5000);

function store() {
  // localStorage.setItem(prefix + 'current_waste', current_waste);
  localStorage.setItem(prefix + 'alltime_waste', alltime_waste);
}

function format(val)
{
  if (val <= 0) {
    return val;
  } else if (val < 60) {
    return val + 's';
  } else if (val < 3600) {
    return Math.ceil(val / 60) + 'mins';
  } else if (val < 86400) {
    return Math.ceil(val / 3600) + 'hrs'
  } else {
    return Math.ceil(val / 86400) + 'days'
  }
}

function increase()
{
    ++current_waste;
    ++alltime_waste;
    window.document.title = format(current_waste) + ' | ' + format(alltime_waste);
}
