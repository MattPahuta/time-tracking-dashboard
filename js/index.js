// *** Time Tracking Dashboard *** //
// ******************************* //

let dashboardData = [];


// Listen for clicks on period selectors
document.getElementById('period-selectors').addEventListener('click', e => {
  // console.log(e.target.id)
  // *** may not need if/else if statement here....
  if (e.target.id === 'daily') {
    handleData(e.target.id)
    // call handleData, pass in e.target.id
    console.log(handleData(e.target.id))
  } else if (e.target.id === 'weekly') {
    handleData(e.target.id)
    console.log(handleData(e.target.id))
  } else if (e.target.id === 'monthly') {
    handleData(e.target.id)
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
    // additional parsing of data?????
    // console.log(dailyData)
    // dailyData.forEach(obj => console.log(obj))
    // call render, pass in dailyData
    render(dailyData)
  } else if (selectedPeriod === 'weekly') {
    const weeklyData = dashboardData.map((item) => item.timeframes.weekly);
    // call render, pass in weeklyData
    render(weeklyData)
  } else {
    const monthlyData = dashboardData.map((item) => item.timeframes.monthly);
    // call render, pass in monthlyData
    render(monthlyData)
  }


}

function render(data) {
  // data.forEach(function(el) {
  //   let resultDataHtml = ``
  //   resultDataHtml += `
  //     <p class="current-result"><span>${el.current}</span>hrs</p>
  //     <p class="previous-result">Last Week - <span>${el.previous}</span>hrs</p>
  //     `
  //   console.log(resultDataHtml)
  // })

  document.getElementById('work-current').textContent = data[0].current;
  document.getElementById('work-previous').textContent = data[0].previous;
  document.getElementById('play-current').textContent = data[1].current;
  document.getElementById('play-previous').textContent = data[1].previous;
  document.getElementById('study-current').textContent = data[2].current;
  document.getElementById('study-previous').textContent = data[2].previous;
  document.getElementById('exercise-current').textContent = data[3].current;
  document.getElementById('exercise-previous').textContent = data[3].previous;
  document.getElementById('social-current').textContent = data[4].current;
  document.getElementById('social-previous').textContent = data[4].previous;
  document.getElementById('self-care-current').textContent = data[5].current;
  document.getElementById('self-care-previous').textContent = data[5].previous;


  const resultHtmlArr = data.map(function(categoryObj) {
    return `
      <p class="current-result"><span>${categoryObj.current}</span>hrs</p>
      <p class="previous-result">Last Week - <span>${categoryObj.previous}</span>hrs</p>`
  })

  // resultHtmlArr.forEach(x => console.log(x));

  // const resultCardData = document.querySelectorAll('.result-body');
  // resultCardData.forEach(el => el.innerHTML = '<p>Test</p>')
}



// function initializeDashboard() {
//   fetchData();

// }


fetchData();



// *** Previous fetch function with error catching:

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