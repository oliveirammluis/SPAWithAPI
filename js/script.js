document.addEventListener('DOMContentLoaded', () => {
  // Styling interaction for the 'home' button
  const homeButton = document.getElementById('home');
  homeButton.addEventListener('mouseover', () => {
    homeButton.style.color = 'red';  // Change color to red on mouseover
  });
  homeButton.addEventListener('mouseout', () => {
    homeButton.style.color = '';  // Reset color on mouseout
  });

  // GitHub API integration for the 'fetch-repos' button
  const fetchReposButton = document.getElementById('fetch-repos');
  const repoList = document.getElementById('repo-list');

  // Add event listener to the 'fetch-repos' button
  fetchReposButton.addEventListener('click', async () => {
    try {
      // Make the API call to GitHub to fetch the repositories
      const response = await fetch('https://api.github.com/users/oliveirammluis/repos');
      const repos = await response.json();
      
      // Clear the current content in repo list
      repoList.innerHTML = '';

      // Loop through the repositories and display each repo
      repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.textContent = repo.name;
        repoList.appendChild(repoItem);  // Append each repo name to the list
      });
    } catch (error) {
      // Handle errors gracefully (e.g., network issues)
      console.error('Error fetching repositories:', error);
    }
  });
});
