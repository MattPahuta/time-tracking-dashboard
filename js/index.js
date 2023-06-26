// *** Time Tracking Dashboard *** //
// ******************************* //

// Get Timer Data from json file
async function fetchTimerData(period = 'daily') {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error(res.status)
    }
    const data = await res.json();

    // seperate this code into parse data function?
    if (period === 'daily') {
      const dailyData = data.map((item) => item.timeframes.daily);
      render('daily', dailyData)
    } else if (period === 'weekly') {
      const weeklyData = data.map((item) => item.timeframes.weekly); 
      render('weekly', weeklyData)
    } else {
      const monthlyData = data.map((item) => item.timeframes.monthly);
      render('monthly', monthlyData)
    }

  } catch (error) {
    console.error(error)
  } 
}

// fetch data when page loads
fetchTimerData()


// Listen for clicks on period selectors
document.getElementById('period-selectors').addEventListener('click', e => {
  if (e.target.id === 'daily' || e.target.id === 'weekly' || e.target.id === 'monthly') {
    fetchTimerData(e.target.id)
  }
})



// Parse data into desired format
// function handleData(selectedPeriod) {
//   if (selectedPeriod === 'daily') {
//     const dailyData = dashboardData.map((item) => item.timeframes.daily);
//     render('daily', dailyData)
//   } else if (selectedPeriod === 'weekly') {
//     const weeklyData = dashboardData.map((item) => item.timeframes.weekly);
//     render('weekly', weeklyData)
//   } else {
//     const monthlyData = dashboardData.map((item) => item.timeframes.monthly);
//     render('monthly', monthlyData)
//   }
// }

// *** render v2
function render(period, data) {
  console.log(data)

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

  // Selected period styling - add/remove class
  const selectors = document.getElementsByClassName('period-select')
  for (let selector of selectors) {
    selector.classList.remove('active')
  }
  document.getElementById(period).classList.add('active')

}

// function render(period = 'daily', data) {
//   // data.forEach(function(el) {
//   //   let resultDataHtml = ``
//   //   resultDataHtml += `
//   //     <p class="current-result"><span>${el.current}</span>hrs</p>
//   //     <p class="previous-result">Last Week - <span>${el.previous}</span>hrs</p>
//   //     `
//   //   console.log(resultDataHtml)
//   // })

//   document.getElementById('work-current').textContent = data[0].current;
//   document.getElementById('work-previous').textContent = data[0].previous;
//   document.getElementById('play-current').textContent = data[1].current;
//   document.getElementById('play-previous').textContent = data[1].previous;
//   document.getElementById('study-current').textContent = data[2].current;
//   document.getElementById('study-previous').textContent = data[2].previous;
//   document.getElementById('exercise-current').textContent = data[3].current;
//   document.getElementById('exercise-previous').textContent = data[3].previous;
//   document.getElementById('social-current').textContent = data[4].current;
//   document.getElementById('social-previous').textContent = data[4].previous;
//   document.getElementById('self-care-current').textContent = data[5].current;
//   document.getElementById('self-care-previous').textContent = data[5].previous;

//   // Selected period styling - add/remove class
//   const selectors = document.getElementsByClassName('period-select')
//   for (let selector of selectors) {
//     selector.classList.remove('active')
//   }
//   document.getElementById(period).classList.add('active')


//   const resultHtmlArr = data.map(function(categoryObj) {
//     return `
//       <p class="current-result"><span>${categoryObj.current}</span>hrs</p>
//       <p class="previous-result">Last Week - <span>${categoryObj.previous}</span>hrs</p>`
//   })

// }



// function initializeDashboard() {
//   fetchData();
//   handleData('daily')
// }




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