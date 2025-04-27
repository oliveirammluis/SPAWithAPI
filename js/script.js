// Simple JS styling addition
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('mouseover', () => {
      homeButton.style.color = 'red';
    });
    homeButton.addEventListener('mouseout', () => {
      homeButton.style.color = '';
    });
  });

document.addEventListener('DOMContentLoaded', () => {
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
