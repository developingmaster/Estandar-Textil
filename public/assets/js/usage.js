/**
 * fields:
 * usage: name of the usage.
 * iconUrl: inner path for an icon.
 * description: a brief description of the usage.
 * imageUrl: inner path for an image.
 */

const USAGES = [
  {
    usage: "usage 1",
    urls: {
      icon: "fas fa-home",
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
  {
    usage: "usage 2",
    urls: {
      icon: "fas fa-home",
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
  {
    usage: "usage 3",
    urls: {
      icon: "fas fa-home",
      background: "./assets/img/thumbnail-usage-1.jpg",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "",
  },
];

document.getElementById("cards").innerHTML = `
  ${USAGES.map((e) => {
    return `<article class="card">
              <img class="card--img" src="${e.urls.background}" alt="${e.alt}"/>
              <div class="card--overlay"></div>
              <div class="card--info">
                <i class="${e.urls.icon}"></i>
                <h3 class="card--title">${e.usage}</h3>
                <p class="card--text">${e.description}</p>
                <a class="card--link" href="">explore</a>
              </div>
            </article>`;
  }).join("")}
`;
