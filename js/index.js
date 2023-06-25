
// time period selectors


document.getElementById('period-selectors').addEventListener('click', e => {
  console.log(e.target.id)
  renderTimerData(e.target.id)
})

// document.addEventListener('click', e => {

//   if (e.target.dataset.daily) {
//     console.log('daily')
//     renderTimerData(e.dataset.target.daily)
//   } else if (e.target.dataset.weekly) {
//     console.log('weekly')
//   } else if (e.target.dataset.monthly) {
//     console.log('monthly')
//     getTimerData();
//   }
// })


// Get Timer Data from json file
async function getTimerData() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error(res.status)
    }
    const data = await res.json();
    console.log(data[0].timeframes.daily.current); // debug
    // call rendering function, pass in json data
    renderTimerData()
  } catch (error) {
    console.error(error)
  } 
}

// *** Reference data structure *** // 
// data[0]
// data[0].title, data[0].timeframes.daily.current/previous
const demoWorkData = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
]

// parse the data function - use object destructuring? 


// render data function
function renderTimerData(period) {
  console.log(`Rendering ${period} data...`)
}


// render of page load - default to daily values