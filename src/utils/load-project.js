import {projects} from '../../data/projects.js';

export default function loadProject() {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectNum = urlParams.get('project');
    
    if (projectNum === '1') {
      generateHTML(projects[0]);
    }

    if (projectNum === '2') {
      generateHTML(projects[1]);
    }
    
    if (projectNum === '3') {
      generateHTML(projects[2]);
    }
  
    // console.log(projects[0].title, projects[0].paragraph,
    //   projects[0].gif, projects[0].sourceLink);
  });
}

function generateListItemHTML(components) {
  let listItems = '';

  for (let i in components) {
    listItems += `<li class="components-list-item">${components[i]}</li>`;
  }
  
  return listItems;
}

function generateHTML(project) {
  // Check if .js-project-container exists
  const container = document.querySelector('.js-project-container');
  if (!container) return; 

  const { title, paragraph, gif, sourceLink, components } = project;

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
          <h2 class="components-title project-title">Components / Languages</h2>
          <ul class="components-list">
            ${generateListItemHTML(components)}
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
