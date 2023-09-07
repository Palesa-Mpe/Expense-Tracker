let xValues = [];
let yValues = [];
let userId = localStorage.getItem("userid");
let categories = [];

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
  yValues.push(category);
}

function populateAmounts(totalAmount) {
  const value = totalAmount;
  xValues.push(value);
}

function fetchCategoriesByName() {

  categories.forEach(async (category) => {

    const response = await fetch(`${apiURL}/categories/${category}`);
    const data = await response.json();

    if (data) {
      console.log('Category by name received successfully', data);
      populateCategories(data.category.name)
    } else {
      console.error('Category by name retrieving failed');
    }

    // await fetch(`${apiURL}/categories/${category}`)
    // .then(response => response.json())
    // .then(data => {
    //   if (data) {
    //     console.log('Category by name received successfully', data);
    //     populateCategories(data.category.name)
    //   } else {
    //     console.error('Category by name retrieving failed');
    //   }
    // });
  });

}

function fetchCategoriesTotal() {
  categories.forEach(async (category) => {

    const response = await fetch(`${apiURL}/expenses/user/${userId}/category/${category}/sum`);
    const data = await response.json();

    if (data) {
      console.log('Category expenses total received successfully');

      populateAmounts(data.expense[0].amount);
    } else {
      console.error('Category expenses total retrieving failed');
    }

    // await fetch(`${apiURL}/expenses/user/${userId}/category/${category}/sum`)
    // .then(response => response.json())
    // .then(data => {
    //   if (data) {
    //     console.log('Category expenses total received successfully');

    //     populateAmounts(data.expense[0].amount);
    //   } else {
    //     console.error('Category expenses total retrieving failed');
    //   }
    // });
  })
}

// fetch(userExpenseUrl)
// .then(response => response.json())
// .then(data => {
//   if (data) {
//     console.log('Expenses received successfully');
//     const expenses = data.expense;

//     expenses.forEach((expense) => {
//       categories.push(expense.categoryid)
//     });

//     fetchCategoriesByName();
//     fetchCategoriesTotal();
//     populateChart();
//   } else {
//     console.error('Expenses retrieving failed');
//   }
// });

function populateChart() {
  console.log(xValues);
  console.log(xValues.length);
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
          text: 'X-Axis Label',
          font: {
            size: 25
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Y-Axis Label',
          font: {
            size: 25
          }
        }
      }
    }
  }
});
}

fetchCategoriesByName();
fetchCategoriesTotal();
populateChart();