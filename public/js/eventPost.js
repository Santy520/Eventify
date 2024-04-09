// TODO: Match references to HTML/handlebars

const newEventHandler = async (e) => {
  e.preventDefault();
  const eventTitle = document.querySelector('#event-title').value.trim();
  const eventDesc = document.querySelector('#event-desc').value.trim();
  const eventLoca = document.querySelector('#event-loca').value.trim();
  const eventDate = document.querySelector('#event-date').value.trim();
  const eventTime = document.querySelector('#event-time').value.trim();

  if (eventTitle && eventLoca && eventDate && eventLoca) {
    const response = await fetch (`/api/events`, {
      method: 'POST',
      body: JSON.stringify(
        { 
          eventTitle, 
          eventDesc, 
          eventLoca, 
          eventDate, 
          eventTime 
        }),
      headers: {
        'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to post new event');
    };
  };
};

// event handler to post new event
document
    .querySelector('.new-event')
    .addEventListener('submit', newEventHandler)