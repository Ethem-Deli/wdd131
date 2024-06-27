document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Check if the input value is not empty
        if (input.value.trim() !== '') {
            // Create a new list item and delete button
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');

            // Add event listener to the delete button to remove the list item
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus();
            });

            // Append the delete button to the list item and the list item to the list
            li.append(deleteButton);
            list.append(li);

            // Clear the input field and refocus
            input.value = '';
        }
        // Regardless if a list item was created or not, refocus on the input
        input.focus();
    });
});

