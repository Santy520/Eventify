// TODO: Match references to HTML/handlebars

const newEventHandler = async (e) => {
  e.preventDefault();

  const eventName = document.querySelector('#event-name').ariaValueMax.trim();
  const eventDesc = document.querySelector('#event-desc').ariaValueMax.trim();
  const eventLoca = document.querySelector('#event-loca').ariaValueMax.trim();
  const eventDate = document.querySelector('#event-date').ariaValueMax.trim();
  const eventTime = document.querySelector('#event-Time').ariaValueMax.trim();

  if (eventName && eventLoca && eventDate && eventLoca && req.session.logged_in) {
    const response = await fetch (`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ eventName, eventDesc, eventLoca, eventDate, eventTime }),
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

document
    .querySelector('.new-event')
    .addEventListener('submit', newEventHandler)