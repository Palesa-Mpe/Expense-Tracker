const inputDate = document.getElementById('date') as HTMLInputElement;
const input = document.getElementById('dropdown-input') as HTMLInputElement;
const hiddenInput = document.getElementById('categoryid') as HTMLInputElement;
const list = document.getElementById('dropdown-list') as HTMLUListElement;
const form = document.getElementsByTagName("form").item(0) as HTMLFormElement;
const outcome = document.getElementById("outcome") as HTMLHRElement;

const apiURL: string = 'http://localhost:4040';

input.addEventListener('input', () => {
  const filter = input.value.toLowerCase();
  const options = list.getElementsByTagName('li');

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const value = option.innerText?.toLowerCase() || '';
    if (value.includes(filter)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  }
});

input.addEventListener('focus', () => {
  list.style.display = 'block';
});

input.addEventListener('blur', () => {
  setTimeout(() => {
    list.style.display = 'none';
  });
});

const currentYear = new Date();
currentYear.setMonth(11);
currentYear.setDate(31);

inputDate.max = currentYear.toISOString().split("T")[0];

document.addEventListener('DOMContentLoaded', async () => {
  const url = `${apiURL}/categories`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data) {
      console.log('Categories received successfully');
      data.forEach((category: any) => {
        populateCategories(category);
      });
    } else {
      console.error('Categories retrieving failed');
    }
  });
  
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  
  const url = `${apiURL}/expenses/`;
  const formObject: { [key: string]: any } = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  //TODO: Put the userid here from localstorage
  formObject['userid'] = localStorage.getItem('userid');
  
  if (formObject.name.trim() === '' || formObject.category.trim() === '') {
    outcome.hidden = false;
    console.error('Form data submission failed');
    document.documentElement.style
    .setProperty('--outcome-background', 'red');
    document.documentElement.style
    .setProperty('--outcome-border', 'red');
    outcome.innerText = "Please fill in all required fields.";

    setTimeout(() => {
      outcome.hidden = true;
    }, 5000);
  } else {
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject)
      }).then(response => response.json())
      .then(data => {
        outcome.hidden = false;

        if (data?.rowLength > 0) {
          console.log('Form data submitted successfully');
          document.documentElement.style
          .setProperty('--outcome-background', 'mediumspringgreen');
          document.documentElement.style
          .setProperty('--outcome-border', 'mediumseagreen');
          outcome.innerText = "Successfully added an expense.";
        } else {
          console.error('Form data submission failed');
          document.documentElement.style
          .setProperty('--outcome-background', 'red');
          document.documentElement.style
          .setProperty('--outcome-border', 'red');
          outcome.innerText = "Failed to add an expense.";
        }
        setTimeout(() => {
          outcome.hidden = true;
        }, 5000);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});

function populateCategories(categoryInfo : any): void {
  const li : HTMLLIElement = document.createElement('li');
  li.setAttribute('data-value', categoryInfo.categoryid);
  li.innerText = categoryInfo.name;
  li.addEventListener('mousedown', () => {
    input.value = li.innerText;
    hiddenInput.value = li.getAttribute('data-value') ?? ' ';
  });

  list.appendChild(li);
}
