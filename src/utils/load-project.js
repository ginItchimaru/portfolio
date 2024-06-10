import {projects} from '../../data/projects.js';

export default function loadProject() {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectNum = urlParams.get('project');
    
    if (projectNum === '1') {
      // Pass the entire project object instead of individual properties
      generateHTML(projects[0]);
    }
  
    console.log(projects[0].title, projects[0].paragraph,
      projects[0].gif, projects[0].sourceLink);
  });
}

function generateHTML(project) {
  // Check if .js-project-container exists
  const container = document.querySelector('.js-project-container');
  if (!container) return; 

  const { title, paragraph, gif, sourceLink } = project;

  const projectsHTML = `
    <div class="js-project-container project container">
      <div class="project-gif-wrapper">
        <img class="project-gif" src="${gif}" />
      </div>
      <div class="project-content">
        <div>
          <h2 class="project-title">${title}</h2>
          <p class="project-description">
            ${paragraph}
          </p>
        </div>
        <div>
          <h2 class="components-title project-title">Components</h2>
          <ul class="components-list">
          
          </ul>
        </div>
      </div>
    </div>
    <div class="project-btn-wrapper">
      <a class="project-btn btn" href="${sourceLink}" target="_blank">Source Code</a>
    </div>
  `;
  
  container.innerHTML = projectsHTML;
}
