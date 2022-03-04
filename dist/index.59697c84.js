function emailInbox() {
    const email = document.createElement("div");
    const emailId = location.pathname.split("/")[2];
    email.innerHTML = `
  <h2 class="container__title">Recibidos</h2>
  <div class="container__emails">
      <a class="container__email-x" href="/inbox/1">Contenido de email ${emailId} recibido</a> 
  </div>`;
    return email;
}
function emailSent() {
    const email = document.createElement("div");
    const emailId = location.pathname.split("/")[2];
    email.innerHTML = `
  <h2 class="container__title">Enviados</h2>
  <div class="container__emails">
      <a class="container__email-x" href="/inbox/1">Contenido de email ${emailId} enviado</a> 
  </div>`;
    return email;
}
function inboxHtml() {
    const inboxEl = document.createElement("div");
    inboxEl.innerHTML = `
  <h2 class="container__title">Inbox</h2>
  <div class="container__emails">
      <a class="container__email-x" href="/inbox/1">email-1</a> 
      <a class="container__email-x" href="/inbox/2">email-2</a> 
  </div>`;
    return inboxEl;
}
function sentHtml() {
    const sentEl = document.createElement("div");
    sentEl.innerHTML = `<h2 class="container__title">Sent</h2>
  <div class="container__emails">
      <a class="container__email-x" href="/sent/3">email-3</a> 
      <a class="container__email-x" href="/sent/4">email-4</a> 
  </div>`;
    return sentEl;
}
//////////////////////////////////////////////////////////////////
//router()
function goTo(path) {
    console.log("Soy goTo");
    history.pushState({
    }, "", path);
    router(path);
}
function findLinks(parameter = document) {
    console.log("Soy findLinks");
    const links = document.querySelectorAll("#link-interno");
    for (const i of links)i.addEventListener("click", (e)=>{
        e.preventDefault();
        const path = e.target.getAttribute("href");
        goTo(path);
    });
}
function findLinksEMails(parameter = document) {
    console.log("Soy findLinksEmails");
    const links = document.querySelectorAll(".container__email-x");
    for (const i of links)i.addEventListener("click", (e)=>{
        e.preventDefault();
        const path = e.target.getAttribute("href");
        goTo(path);
    });
}
function main() {
    console.log("Soy Main");
    findLinks();
}
main();

//# sourceMappingURL=index.59697c84.js.map
