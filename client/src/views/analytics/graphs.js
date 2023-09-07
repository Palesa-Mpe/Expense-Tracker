let xValues = [];
let yValues = [];
let userId = localStorage.getItem("userid");
let categories = [];
let done = [];

const apiURL = 'http://localhost:4040';
const userExpenseUrl = `${apiURL}/expenses/user/${userId}`;

function generateRandomColorsArray(length) {
  const uniqueColors = new Set(); // To store unique colors
  const colorsArray = []; // Final array of colors

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  while (uniqueColors.size < length) {
    const randomColor = getRandomColor();
    if (!uniqueColors.has(randomColor)) {
      uniqueColors.add(randomColor);
      colorsArray.push(randomColor);
    }
  }

  return colorsArray;
}

function populateCategories(category) {
  xValues.push(category);
}

function populateAmounts(totalAmount) {
  yValues.push(totalAmount);
}

async function fetchCategoriesByName() {

  for (const category of categories) {
    try {
      const response = await fetch(`${apiURL}/categories/${category}`);
      const data = await response.json();
      if (data) {
        console.log('Category by name received successfully');
        if(!(xValues.includes(data.category.name))) {
          done.push(data.category.categoryid)
          populateCategories(data.category.name);
        }
      } else {
        console.error('Category by name retrieving failed');
      }
    } catch (error) {
      console.error('Error fetching category by name:', error);
    }
  }

}

async function fetchCategoriesTotal() {

  for (const category of categories) {
    try {

      const response = await fetch(`${apiURL}/expenses/user/${userId}/category/${category}/sum`);
      const data = await response.json();
      if (data) {
        console.log('Category expenses total received successfully');
        if (done.includes(category)) {
          populateAmounts(data.expense[0].amount);
          done = done.slice(done.indexOf(category))
        }
      } else {
        console.error('Category expenses total retrieving failed');
      }
    } catch (error) {
      console.error('Error fetching category expenses total:', error);
    }
  }

}

function populateChart() {
  console.log('popChart',xValues);
  console.log('len',xValues.length > 0);
let barColors = generateRandomColorsArray(xValues.length);

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'This is my bar graph',
        font: {
          size: 40
        }
      }
    },
    responsive: true, // Disable automatic resizing
    maintainAspectRatio: false, // Allow aspect ratio to be adjusted
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Expense Category',
          font: {
            size: 25
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Amount (ZAR)',
          font: {
            size: 25
          }
        }
      }
    }
  }
});
}

async function Main() {
  const response = await fetch(userExpenseUrl);
  const data = await response.json();

  if (data) {
    console.log('Expenses received successfully');
    const expenses = data.expense;

    expenses.forEach((expense) => {
      categories.push(expense.categoryid);
    });

    await fetchCategoriesByName();
    await fetchCategoriesTotal();

    // Now that the data is fetched and processed, call populateChart
    populateChart();

  } else {
    console.error('Expenses retrieving failed');
  }
}

Main();