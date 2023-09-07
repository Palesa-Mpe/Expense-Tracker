const api = 'http://localhost:4040';
const infoSpans = document.getElementsByTagName('span');
//TODO: Put userid here from localstorage
const userid = "Dave";

async function populateSpans() {
  fetch(`${api}/expenses/user/${userid}/sum`)
  .then(response => response.json())
  .then( result => {
    
    if (result) {
      let total = 0;
      result.expense.map((expense: { amount: number; }) => total += expense.amount);
      const expensiveCategory = result.expense.reduce((max: { amount: number; }, current: { amount: number; }) => {
        return current.amount > max.amount ? current : max;
      }, result.expense[0]);
      
      fetch(`${api}/categories/${expensiveCategory.categoryid}`)
      .then(response => response.json())
      .then((category) => {
        if (category.success) {
        infoSpans[0].innerText = 'R ' + total;
        infoSpans[1].innerText = category.category.name;
        infoSpans[2].innerText = 'R ' + (total / result.expense.length).toFixed(2);
        }
      });
    }
  });
}

async function createChart() {
  const canvas = document.getElementById('myChart') as HTMLCanvasElement ?? "";
  fetch(`${api}/expenses/user/${userid}/sum`)
  .then(response => response.json())
  .then( async result => {
    console.log(result);
    
    let chartLabels: any[] = [];
    let chartData: any[] = [];

    if (result) {

      for (let index = 0; index < result.expense.length; index++) {
        const categoriesResult = await fetch(`${api}/categories/${result.expense[index].categoryid}`);
        const categories : any = await categoriesResult.json();
          
        if (categories.success) {
          chartLabels.push(categories.category.name);
        }

        chartData.push(result.expense[index].amount.toFixed(2));
      }
    }


    if (chartLabels.length <= 0) {
      chartLabels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
      chartData = [12, 19, 3, 5, 2];
    }
    const labels = chartLabels;

    const data = chartData;

    new Chart(canvas.getContext("2d") || '', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'R',
            data: data,
          }]
        },
        options: {
        }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateSpans();
  createChart();
});

