// list.children;

console.log(list.children);



console.log(Array.from(list.children));

filter.addEventListener('keyup', () => {
    Array.from(list.children).map(li => {
        const matchFound = new RegExp(filter.value, 'gi').test(li.innerText);
        if (!matchFound) {
            li.classList.add('hidden');
        } else {
            li.classList.remove('hidden');
        }
    });
});