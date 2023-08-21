let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];
let barColors = generateRandomColorsArray(xValues.length);

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
        display: true,
        text: 'This is my bar graph',
        font: {
          size: 40
        }
      }
    }
  }
});