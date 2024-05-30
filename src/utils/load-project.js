import {projects} from '../../data/projects.js';

const loadProject = () => {
  const generateHTML = (title, paragraph, gif, sourceLink) => {
    let projectsHTML = `
      <div class="project-gif-wrapper">
        g class="project-gif" src="${gif}" />
      </div>
        <div class="project-content">
          <div>
            <h2 class="project-title">${title}</h2>
            <p class="project-discription">
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
        <a class="project-btn btn" target="_blank" href="${sourceLink}">Source Code</a>
      </div>
    `;

    document.querySelector('.js-project').innerHTML = projectsHTML;
  };

  // make switch cases for each project (1-6) use generateHTML() with parameters to generate the html

};

export default loadProject;