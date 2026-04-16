# ✒️ Scribe — Author Resources Directory

A clean, kiosk-style resource directory for authors — available as both an **Electron desktop app** and an **installable PWA web app**.

🌐 **[Live demo →](https://guildmasterdev.github.io/Scribe)**

## Features

- **30 curated resources** across six categories: Writing Tools, Publishing, Self-Publishing, Marketing, Printing & Merch, and Communities
- **Kiosk interface** — distraction-free, dark-themed, single screen
- **Search** across resource names, descriptions, and categories
- **Category filters** for quick navigation
- **Two ways to use it:**
  - Desktop app (Electron 41) for macOS, Windows, Linux
  - Web app at [guildmasterdev.github.io/Scribe](https://guildmasterdev.github.io/Scribe) — installable as a PWA, works offline
- **External links** open in your default browser

## PWA / Web demo

The web demo lives in `web/` as a single self-contained `index.html` (inline CSS, inline JS, embedded resource data — no fetch calls, no external JS dependencies).

It is deployed automatically to GitHub Pages on every push to `main`.

Once loaded, the service worker (`web/sw.js`) caches the shell, the icons, and the embedded resource data so the directory is fully usable offline. Install it from your browser's "Install app" / "Add to Home Screen" menu to get a standalone window.

- Manifest: `web/manifest.json`
- Theme color: `#2563eb` (writer's ink blue)
- Background: `#0a0a0f`
- Icons: 192×192, 512×512, plus a 512×512 maskable

## Desktop app

```bash
git clone https://github.com/GuildMasterDev/Scribe.git
cd Scribe
npm install
npm start
```

### Build distributables

`electron-builder` is configured for macOS (DMG + ZIP, x64 + arm64), Windows (NSIS + portable), and Linux (AppImage + deb).

```bash
npm run build         # current platform
npm run build:mac
npm run build:win
npm run build:linux
```

Outputs land in `dist/`.

## Resource categories

- **Writing Tools** — Grammarly, Scrivener, Hemingway Editor, Google Docs, ProWritingAid
- **Publishing** — Penguin Random House, HarperCollins, QueryTracker, Publishers Marketplace, Manuscript Wish List
- **Self-Publishing** — Amazon KDP, IngramSpark, Draft2Digital, BookBaby, Reedsy
- **Marketing** — BookBub, Goodreads, NetGalley, Canva, MailerLite
- **Printing & Merch** — PrintNinja, Printful, Blurb, Lulu, 48 Hour Books
- **Communities** — r/writing, Absolute Write, NaNoWriMo, Writers Guild of America, 20BooksTo50K

## Customization

To add or modify resources for the desktop app, edit the `resources` array in `renderer.js`:

```javascript
{
    name: "Resource Name",
    category: "writing", // writing | publishing | self-publishing | marketing | printing | communities
    description: "Brief description of the resource.",
    url: "https://resource-url.com"
}
```

For the web demo, update the matching array inside `web/index.html`.

## Tech stack

- Electron 41 (sandboxed BrowserWindow, contextIsolation, IPC-based external link opener)
- electron-builder 26 for cross-platform packaging
- Vanilla HTML/CSS/JS — no frameworks, no build step for the web demo
- Service Worker + Web App Manifest for PWA install + offline support
- GitHub Actions for Pages deploy and CI syntax checks

## License

MIT — see [LICENSE](LICENSE).

## Author

GuildMaster Development

## Contributing

Issues and pull requests welcome — add resources, refine categories, or improve the interface.
