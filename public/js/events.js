const subToEvent = async (e) => {
  console.log("TEST")
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

document
    .querySelector('.sub-button')
    .addEventListener('click', subToEvent)