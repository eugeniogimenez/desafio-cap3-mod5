export function emailSent() {
  const email = document.createElement("div");

  const emailId = location.pathname.split("/")[2];
  email.innerHTML = `
  <h2 class="container__title">Enviados</h2>
  <div class="container__emails">
      <a class="container__email-x" href="/inbox/1">Contenido de email ${emailId} enviado</a> 
  </div>`;

  return email;
}
