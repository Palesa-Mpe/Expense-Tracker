"use strict";
const input = document.getElementById('dropdown-input');
const list = document.getElementById('dropdown-list');
input.addEventListener('input', () => {
    var _a;
    const filter = input.value.toLowerCase();
    const options = list.getElementsByTagName('li');
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const value = ((_a = option.getAttribute('data-value')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        if (value.includes(filter)) {
            option.style.display = 'block';
        }
        else {
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
        const listItem = li;
        listItem.addEventListener('mousedown', () => {
            input.value = listItem.innerText;
        });
    });
});
