document.addEventListener('DOMContentLoaded', function () {
    const launchScreen = document.getElementById('launch-screen');
    const appContainer = document.getElementById('app');
    const startJournalButton = document.getElementById('start-journal');
    const journalEntriesContainer = document.getElementById('journal-entries');
    const moodSelect = document.getElementById('mood-select');
    const journalTitleInput = document.getElementById('journal-title');
    const journalEntryInput = document.getElementById('journal-entry');
    const addEntryButton = document.getElementById('add-entry');
  
    
    startJournalButton.addEventListener('click', function () {
      launchScreen.style.display = 'none';
      appContainer.style.display = 'block';
    });
  

    addEntryButton.addEventListener('click', function () {
      const mood = moodSelect.value;
      const title = journalTitleInput.value;
      const entryText = journalEntryInput.value;
  
      if (title.trim() === '' && entryText.trim() === '') {
        alert('Please enter a title or a journal entry.');
        return;
      }
  
      const entryElement = document.createElement('div');
      entryElement.className = 'journal-entry';
  
      const entryContent = document.createElement('div');
      entryContent.className = 'entry-content';
      entryContent.innerHTML = `<h2>${title}</h2><p>${entryText}</p>`;
  
      const moodEmoji = document.createElement('div');
      moodEmoji.className = 'mood-emoji';
      moodEmoji.textContent = mood;
  
      entryElement.appendChild(moodEmoji);
      entryElement.appendChild(entryContent);
  
      journalEntriesContainer.appendChild(entryElement);
  
      moodSelect.value = '😊';
      journalTitleInput.value = '';
      journalEntryInput.value = '';
    });
  });

  
