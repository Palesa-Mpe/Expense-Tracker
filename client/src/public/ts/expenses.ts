const input = document.getElementById('dropdown-input') as HTMLInputElement;
const list = document.getElementById('dropdown-list') as HTMLUListElement;

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

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('li').forEach(li => {
    const listItem = li as HTMLLIElement;
    listItem.addEventListener('mousedown', () => {
      input.value = listItem.innerText;
    });
  });
});
