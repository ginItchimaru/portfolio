import { projects } from '../../data/projects.js';

export default function loadProject() {
  // Example debugging method:
  const projectIndex = 0; // For debugging, loading first project, replace with dynamic index as needed

  if (projectIndex >= 0 && projectIndex < projects.length) {
    const projectData = projects[projectIndex];
    generateHTML(projectData);
  } else {
    console.error('Invalid project index');
  }
}

function generateHTML({ title, paragraph, gif, sourceLink }) {
  // not sure if needed
  // Guard clause, checks if .js-project-container exists
  if (!document.querySelector('.js-project-container')) return; 

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
  
  document.querySelector('.js-project-container').innerHTML = projectsHTML;
}