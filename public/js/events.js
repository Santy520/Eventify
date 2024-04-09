const subToEvent = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    const eventId = e.target.getAttribute('data-id');

    const response = await fetch(`/api/subs`, {
      method: 'POST',
      body: JSON.stringify(
        { 
          eventId
        }),
      headers: {
        'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to subscribe to event');
    } 
  }
}

// Applies event listener to multiple items with the same sub-button class
const elements = document.querySelectorAll('.sub-button');
elements.forEach(element => {
  element.addEventListener('click', subToEvent);
});