document.addEventListener("DOMContentLoaded", function () {
    const journalEntries = document.getElementById("journal-entries");
    const journalEntryInput = document.getElementById("journal-entry");
    const addEntryButton = document.getElementById("add-entry");

    addEntryButton.addEventListener("click", function () {
        const entryText = journalEntryInput.value;

        if (entryText.trim() !== "") {
            const entryElement = document.createElement("div");
            entryElement.className = "entry";
            entryElement.innerHTML = `
                <div class="entry-text">${entryText}</div>
                <button class="edit-entry">Edit</button>
                <button class="delete-entry">Delete</button>
            `;

            journalEntries.appendChild(entryElement);

            // Add a click event to delete entries
            const deleteButton = entryElement.querySelector(".delete-entry");
            deleteButton.addEventListener("click", function () {
                journalEntries.removeChild(entryElement);
            });

            // Add a click event to edit entries
            const editButton = entryElement.querySelector(".edit-entry");
            editButton.addEventListener("click", function () {
                const editText = entryElement.querySelector(".entry-text");
                const updatedText = prompt("Edit your entry:", editText.textContent);
                if (updatedText !== null) {
                    editText.textContent = updatedText;
                }
            });

            journalEntryInput.value = "";
        }
    });
});
