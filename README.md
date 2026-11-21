# Muhammed Nihal K · Developer portfolio

A responsive portfolio built with HTML, CSS, and vanilla JavaScript. No build step is required.

## Run locally

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Deploy `dist/` to a static host. For a GitHub Pages deployment, use a Pages workflow that uploads `dist/` as the artifact and check whether your plan supports Pages from a private repository.

## Update the portfolio

- Edit copy and SEO metadata in `dist/index.html`.
- Edit skills, featured projects, and verified demo and source URLs in `dist/content.js`. Project illustrations are conceptual and use the data in each project's `art` field.
- Add your CV as `dist/resume.pdf` and set `settings.resume` to `./resume.pdf`. The download button is hidden until a path is configured.
- Update Open Graph and canonical URLs if you publish to a custom domain. Use your host's domain settings to configure DNS.

## Enable email delivery

1. Create a form in Formspree and verify `mnihal358@gmail.com` as the recipient. Enable the provider's spam protection and restrict origins if your plan supports it. The form includes the provider's `_gotcha` honeypot.
2. Set `settings.contactEndpoint` in `dist/content.js` to the public HTTPS form endpoint. Redeploy.
3. Submit from the deployed site, confirm the success state, and verify the message arrives at the destination inbox.

A custom endpoint can replace Formspree. It must accept multipart POSTs with `name`, `email`, `phone`, `subject`, `message`, and `_gotcha`, perform server-side validation and abuse controls, and return a 2xx status only when the submission is accepted. Store provider credentials server-side.

The WhatsApp buttons open a prefilled chat. For automatic notifications, use an authenticated server-side form webhook or a custom endpoint and call the WhatsApp Business Cloud API after accepting the submission. Configure an approved message template, recipient opt-in, and server-side credentials. Keep email delivery independent of WhatsApp delivery. The site does not send automated WhatsApp messages by default.

Technology marks are from Devicon and are subject to their respective trademark terms. See `dist/icons/LICENSE`.
