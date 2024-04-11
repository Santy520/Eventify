// Delete subscription function
const deleteSub = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');

    const response = await fetch(`/api/subs/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete subscription');
    } 
  }
}

// Applies event listener to multiple items with the same unsub-button class
const elements = document.querySelectorAll('.unsub-button');
elements.forEach(element => {
  element.addEventListener('click', deleteSub);
});