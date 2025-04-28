const fetchButton = document.getElementById('fetch-github');

fetchButton.addEventListener('click', () => {
  // Pulse animation
  fetchButton.classList.add('pulse');

  // Remove the pulse class after animation ends
  setTimeout(() => {
    fetchButton.classList.remove('pulse');
  }, 600);

  // GitHub API fetch data
  fetch('https://api.github.com/users/oliveirammluis')
  .then(response => response.json())
  .then(data => {
    document.getElementById('github-data').innerHTML = `
    <p>Name: ${data.name}</p>
    <p>Bio: ${data.bio}</p>
    <p>Public Repositores: ${data.public_repos}</p>`;
  })
  .catch(error => console.log('Error fetching data:', error));
  
});