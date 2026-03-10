const form = document.getElementById('myForm');
const cardsDisplay = document.getElementById('cardsDisplay');
const clearAllBtn = document.getElementById('clearAll');
let cardCount = 0;

// Get readable label for field names
function getFieldLabel(fieldName) {
  const labels = {
    'text': 'Text',
    'password': 'Password',
    'email': 'Email',
    'number': 'Number',
    'tel': 'Phone',
    'url': 'URL',
    'date': 'Date',
    'month': 'Month',
    'week': 'Week',
    'time': 'Time',
    'datetime': 'Datetime',
    'color': 'Color',
    'option1': 'Option 1',
    'option2': 'Option 2',
    'radio': 'Radio',
    'select': 'Select',
    'textarea': 'Message',
    'file': 'File',
    'range': 'Range',
    'hidden': 'Hidden'
  };
  return labels[fieldName] || fieldName;
}

// Create a card from form data
function createCard(formData) {
  cardCount++;
  
  // Remove empty message if exists
  const emptyMsg = cardsDisplay.querySelector('.empty-message');
  if (emptyMsg) {
    emptyMsg.remove();
  }

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h4>Submission #${cardCount}</h4>`;

  // Add all form fields to card
  formData.forEach((value, key) => {
    if (key === 'hidden') return; // Skip hidden fields

    const displayValue = value || '(Empty)';
    const label = getFieldLabel(key);

    const fieldDiv = document.createElement('p');
    fieldDiv.innerHTML = `
      <div class="card-item">
        <span class="card-label">${label}:</span>
        <span class="card-value">${sanitizeHTML(displayValue)}</span>
      </div>
    `;
    card.appendChild(fieldDiv);
  });

  cardsDisplay.insertBefore(card, cardsDisplay.firstChild);
}

// Sanitize HTML to prevent XSS
function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Get all form data
function getFormData() {
  const formData = new FormData(form);
  return formData;
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = getFormData();
  createCard(formData);
  
  // Optional: Reset form after submission
  form.reset();
});

// Clear all cards
clearAllBtn.addEventListener('click', () => {
  cardsDisplay.innerHTML = '<div class="empty-message">No submissions yet. Fill and submit the form to see cards here.</div>';
  cardCount = 0;
});
