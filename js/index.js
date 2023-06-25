// *** Time Tracking Dashboard *** //
// ******************************* //

let dashboardData = [];




// Listen for clicks on period selectors
document.getElementById('period-selectors').addEventListener('click', e => {
  // console.log(e.target.id)
  if (e.target.id === 'daily') {
    renderData(e.target.id)
    console.log(handleData(e.target.id))
  } else if (e.target.id === 'weekly') {
    renderData(e.target.id)
    console.log(handleData(e.target.id))
  } else if (e.target.id === 'monthly') {
    renderData(e.target.id)
    console.log(handleData(e.target.id))
  }
})




// Simple Fetch 
async function fetchData() {
  const res = await fetch("./data.json");
  const data = await res.json();
  dashboardData = data;

}

// make this handleData
function handleData(selectedPeriod) {

  // const parsedData = dashboardData.map((item) => item.timeframes[selectedPeriod]);
  // console.log(parsedData)

  if (selectedPeriod === 'daily') {
    const dailyData = dashboardData.map((item) => item.timeframes.daily);
    console.log(dailyData)
    // call render, pass in dailyData
  } else if (selectedPeriod === 'weekly') {
    const weeklyData = dashboardData.map((item) => item.timeframes.weekly);
    console.log(weeklyData)
    // call render, pass in weeklyData
  } else {
    const monthlyData = dashboardData.map((item) => item.timeframes.monthly);
    console.log(monthlyData)
    // call render, pass in monthlyData
  }


}



// render data function
function renderData(period) {
  // if period is 'daily'
    // - fetch daily data
    // - paint daily data
  // if period is 'weekly'
    // - fetch weekly data
    // - paint weekly data


    console.log(`Rendering ${period} data...`)

  // take in the right data from handleData
  // loop over the resultCardData with forEach
  // set the innerHtml of each card
  const resultCardData = document.querySelectorAll('.result-body');



  // Render the result-body content for each card
  /*
    <div class="result-body">
      // 
      <p class="current-result"><span id="work-current">${}</span>hrs</p>
      <p class="previous-result">Last Week - <span id="work-previous">${}</span>hrs</p>
    </div>
  */
}


// function initializeDashboard() {
//   fetchData();

// }


fetchData();


// Get Timer Data from json file
// async function fetchTimerData() {
//   try {
//     const res = await fetch("./data.json");
//     if (!res.ok) {
//       throw new Error(res.status)
//     }
//     const data = await res.json();

//     if (period === 'daily') {
//       const dailyData = data.map((item) => item.timeframes.daily);
//       renderData(dailyData)
//     } else if (period === 'weekly') {
//       const weeklyData = data.map((item) => item.timeframes.weekly); 
//       renderData(weeklyData)
//     } else {
//       const monthlyData = data.map((item) => item.timeframes.monthly);
//       renderData(monthlyData)
//     }

//   } catch (error) {
//     console.error(error)
//   } 
// }