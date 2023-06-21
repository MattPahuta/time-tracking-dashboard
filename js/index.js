
// time period selectors


document.addEventListener('click', e => {
  if (e.target.dataset.daily) {
    console.log('daily')
  } else if (e.target.dataset.weekly) {
    console.log('weekly')
  } else if (e.target.dataset.monthly) {
    console.log('monthly')
    getTimerData();
  }
})


// Get Timer Data from json file
async function getTimerData() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(data); // debug
    // call rendering function, pass in json data
  } catch (e) {
    console.error('Error!', e)
  } 
}


// render data function