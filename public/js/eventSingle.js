// Delete Event function
const deleteEvent = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete event');
    } 
  }
}

document
  .querySelector('.delete-button')
  .addEventListener('click', deleteEvent)