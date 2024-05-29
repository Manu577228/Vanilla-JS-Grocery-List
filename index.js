document.getElementById('add-item-btn').addEventListener('click', addItem);

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue !== '') {
        const groceryList = document.getElementById('grocery-list');

        const listItem = document.createElement('li');
        listItem.textContent = itemValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            groceryList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        groceryList.appendChild(listItem);

        itemInput.value = '';
    }
}
