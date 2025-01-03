document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;

        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});
