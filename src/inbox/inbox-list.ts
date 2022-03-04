export function inboxHtml() {
    const inboxEl = document.createElement("div");
  
    inboxEl.innerHTML = `
    <h2 class="container__title">Inbox</h2>
    <div class="container__emails">
        <a class="container__email-x" href="/inbox/1">email-1</a> 
        <a class="container__email-x" href="/inbox/2">email-2</a> 
    </div>`;
  
    return inboxEl;
  }