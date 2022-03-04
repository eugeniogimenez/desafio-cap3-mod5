import { emailInbox } from "./inbox/inbox-email";
import { inboxHtml } from "./inbox/inbox-list";
import { sentHtml } from "./sent/sent-list";
import { emailSent } from "./sent/sent-email";

import { findLinksEMails } from "./app";

export function router(path) {
    console.log("Soy router. La route elegida es: ", path);
  
    const routes = [
      {
        path: /inbox/,
        handler: inboxHtml,
        text: "inbox",
      },
      {
        path: /sent/,
        handler: sentHtml,
        text: "sent",
      },
      {
        path: /\/inbox\/./,
        handler: emailInbox,
        text: "inbox con algo",
      },
      {
        path: /\/sent\/./,
        handler: emailSent,
        text: "sent con algo",
      },
    ];
  
    for (const i of routes) {
      if (i.path.test(path)) {
        const el = i.handler();
        console.log(i.text);
  
        const container = document.querySelector(".container");
  
        if (container.firstChild) {
          container.firstChild.remove();
        }
  
        container.appendChild(el);
        findLinksEMails(el);
      }
    }
  }