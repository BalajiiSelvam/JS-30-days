document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        const removeBtn = document.createElement('button');
        
        li.textContent = task;
        removeBtn.textContent = 'Remove';

        li.appendChild(removeBtn);
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', function() {
            li.remove();  // Remove the task when the remove button is clicked
        });

        document.getElementById('todo-list').appendChild(li);
        input.value = '';  // Clear the input field after adding the task
    }
});
