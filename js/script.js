// Simple JS styling and GitHub API integration
document.addEventListener('DOMContentLoaded', () => {
    // Styling interaction for the 'home' button
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('mouseover', () => {
      homeButton.style.color = 'red';
    });
    homeButton.addEventListener('mouseout', () => {
      homeButton.style.color = '';
    });
  
    // GitHub API integration for the 'github' button
    const githubButton = document.getElementById('github');
    const repoList = document.getElementById('repo-list');
  
    githubButton.addEventListener('click', async () => {
      const response = await fetch('https://api.github.com/users/oliveirammluis/repos');
      const repos = await response.json();
      
      repoList.innerHTML = ''; // Clear existing content
      
      repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.textContent = repo.name;
        repoList.appendChild(repoItem);
      });
    });
  });
  