import { router } from "./router";



//////////////////////////////////////////////////////////////////

//router()

function goTo(path) {
  console.log("Soy goTo");

  history.pushState({}, "", path);

  router(path);
}

function findLinks(parameter: any = document) {
  console.log("Soy findLinks");

  const links = document.querySelectorAll("#link-interno");

  for (const i of links) {
    i.addEventListener("click", (e) => {
      e.preventDefault();

      const path = (e.target as any).getAttribute("href");

      goTo(path);
    });
  }
}

export function findLinksEMails(parameter: any = document) {
  console.log("Soy findLinksEmails");

  const links = document.querySelectorAll(".container__email-x");

  for (const i of links) {
    i.addEventListener("click", (e) => {
      e.preventDefault();

      const path = (e.target as any).getAttribute("href");

      goTo(path);
    });
  }
}

function main() {
  console.log("Soy Main");

  findLinks();
}

main();
