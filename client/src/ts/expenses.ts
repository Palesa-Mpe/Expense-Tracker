const input = document.getElementById('dropdown-input') as HTMLInputElement;
const list = document.getElementById('dropdown-list') as HTMLUListElement;
const form = document.getElementsByTagName("form").item(0) as HTMLFormElement;
const outcome = document.getElementById("outcome") as HTMLHRElement;

input.addEventListener('input', () => {
  const filter = input.value.toLowerCase();
  const options = list.getElementsByTagName('li');

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const value = option.getAttribute('data-value')?.toLowerCase() || '';
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

document.addEventListener('DOMContentLoaded', async () => {
  // const url = '/api/category';

  // fetch(url)
  // .then(response => response.json())
  // .then(data => {
  //   if (data.success) {
  //     console.log('Categories received successfully');
  //     data.categories.forEach((category: any) => {
  //       populateCategories(category);
  //     });
  //   } else {
  //     console.error('Categories retrieving failed');
  //   }
  // });
  
  
  document.querySelectorAll('li').forEach(li => {
    const listItem = li as HTMLLIElement;
    listItem.addEventListener('mousedown', () => {
      input.value = listItem.innerText;
    });
  });

  
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const url = '/api/expenses';
  // http://localhost:4040/api/expenses

  try {
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(response => response.json())
    .then(data => {
      outcome.hidden = false;
      if (data.success) {
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
});

function populateCategories(categoryInfo : any): void {
  const li : HTMLLIElement = document.createElement('li');
  li.setAttribute('data-value', categoryInfo.Id);
  li.innerText = categoryInfo.Name;

  list.appendChild(li);
}
