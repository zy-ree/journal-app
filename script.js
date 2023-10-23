document.addEventListener("DOMContentLoaded", function () {
    const launchScreen = document.getElementById("launch-screen");
    const app = document.getElementById("app");
    const startJournalButton = document.getElementById("start-journal");
    const journalEntries = document.getElementById("journal-entries");
    const journalTitleInput = document.getElementById("journal-title");
    const journalEntryInput = document.getElementById("journal-entry");
    const addEntryButton = document.getElementById("add-entry");

    startJournalButton.addEventListener("click", function () {
        launchScreen.style.display = "none";
        app.style.display = "block";
    });

    addEntryButton.addEventListener("click", function () {
        const title = journalTitleInput.value;
        const entryText = journalEntryInput.value;

        if (title.trim() !== "" && entryText.trim() !== "") {
            const entryElement = document.createElement("div");
            entryElement.className = "entry";
            const currentDate = new Date();
            const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
            entryElement.innerHTML = `
                <div class="entry-title">${title}</div>
                <div class="entry-date">${formattedDate}</div>
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
                const updatedTitle = prompt("Edit the title:", title);
                if (updatedTitle !== null) {
                    title = updatedTitle;
                    entryElement.querySelector(".entry-title").textContent = title;
                }
            });

            journalTitleInput.value = "";
            journalEntryInput.value = "";
        }
    });
});
