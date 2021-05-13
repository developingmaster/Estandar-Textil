/**
 * fields:
 * project: name of the project.
 * urls-bg: inner path for an image background.
 * client: client's name.
 * sector: client's economic sector.
 * description: a brief description of the project.
 * alt: for screen readers.
 */

const PROJECTS = [
  {
    project: "project 1",
    urls: {
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    client: "client 1",
    sector: "sector 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
  {
    project: "project 2",
    urls: {
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    client: "client 1",
    sector: "sector 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
  {
    project: "project 3",
    urls: {
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    client: "client 1",
    sector: "sector 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
  {
    project: "project 4",
    urls: {
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    client: "client 1",
    sector: "sector 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
];

document.getElementById("projects").innerHTML = `
  ${PROJECTS.map((e) => {
    return `<div class="project">
              <img
                class="project--thumb"
                src="${e.urls.background}"
                alt="${e.alt}"
              />
              <div class="project--info">
                <h3 class="project--title">${e.project}</h3>
                <p class="project--client">Cliente: ${e.client}</p>
                <p class="project--sector">Sector: ${e.sector}</p>
                <p class="project--detail">${e.description}</p>
              </div>
            </div>`;
  }).join("")}
`;
