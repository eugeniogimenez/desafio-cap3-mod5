export function sentHtml() {
    const sentEl = document.createElement("div");
  
    sentEl.innerHTML = `<h2 class="container__title">Sent</h2>
    <div class="container__emails">
        <a class="container__email-x" href="/sent/3">email-3</a> 
        <a class="container__email-x" href="/sent/4">email-4</a> 
    </div>`;
  
    return sentEl;
  }