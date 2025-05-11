// Change text and style
document.getElementById('change-btn').addEventListener('click', function () {
    const text = document.getElementById('dynamic-text');
    text.textContent = 'The text and style have been changed!';
    text.style.color = 'white';
    text.style.backgroundColor = '#007BFF';
    text.style.padding = '10px';
    text.style.borderRadius = '8px';
  });
  
  // Toggle element
  document.getElementById('toggle-btn').addEventListener('click', function () {
    const container = document.getElementById('toggle-container');
    const existing = document.getElementById('new-element');
  
    if (existing) {
      existing.remove();
    } else {
      const newEl = document.createElement('p');
      newEl.id = 'new-element';
      newEl.textContent = 'You just added this element!';
      newEl.style.color = '#28a745';
      container.appendChild(newEl);
    }
  });
  