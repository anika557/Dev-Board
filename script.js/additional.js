let incrementValue = 23;
let decrementValue = 6;

const clickedButtons = new Set();

// Add event listeners for all 6 buttons
document.getElementById('button1').addEventListener('click', function() { performTasks('button1'); });
document.getElementById('button2').addEventListener('click', function() { performTasks('button2'); });
document.getElementById('button3').addEventListener('click', function() { performTasks('button3'); });
document.getElementById('button4').addEventListener('click', function() { performTasks('button4'); });
document.getElementById('button5').addEventListener('click', function() { performTasks('button5'); });
document.getElementById('button6').addEventListener('click', function() { performTasks('button6'); });

function performTasks(buttonId) {
    // Update increment and decrement values
    incrementValue += 1;
    decrementValue -= 1;

    document.getElementById("inreaseNumber").textContent = incrementValue;
    document.getElementById("decreaseNumber").textContent = decrementValue;

    // Disable the button and update its style
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.classList.remove('bg-blue-600');
    button.classList.add('bg-gray-500');

    // Add the button to the clickedButtons set
    clickedButtons.add(buttonId);

    // Log the task completion in the activity log
    handleButtonClick(buttonId);

    // Check if all buttons are clicked
    if (clickedButtons.size === 6) {
        alert("All tasks completed successfully!");
    }
}

function handleButtonClick(buttonId) {
    // Get the button element
    const button = document.getElementById(buttonId);
    const card = button.closest('.h-70'); // Find the closest card container
    const title = card.querySelector('h1.text-xl.font-bold').textContent; // Get the title
    const deadline = card.querySelector('.deadline').textContent; // Get the deadline

    const currentTime = new Date().toLocaleDateString('en-us', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Add the task completion details to the activity log
    const messageContainer = document.getElementById('container');
    const box = document.createElement('div');
    box.className = 'p-4 mb-4 bg-white rounded-lg shadow-md';
    const paragraph = document.createElement('p');
    paragraph.textContent = `Task: "${title}" | Deadline: ${deadline} | Completed at: ${currentTime}`;
    box.appendChild(paragraph);
    messageContainer.appendChild(box);
}

function clearText() {
    const container = document.getElementById("container");
    if (container.innerHTML.trim() === '') {
        alert("The activity log is already empty!"); // Notify if the log is already empty
        return;
    }
    container.innerHTML = ''; // Clear the activity log
    alert("Activity log cleared successfully!"); // Confirmation message
}

// Event listener for "Activity Log" click
document.getElementById('histry').addEventListener('click', function() {
    clearText();
});

// Event listener for "Clear History" button
document.querySelector('.text-xl.bg-blue-600').addEventListener('click', function () {
    clearText();
    console.log('Activity log cleared'); // Optional: Log the action for debugging
});
