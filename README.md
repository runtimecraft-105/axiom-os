# macOS-style raminnn.me

A personal portfolio that looks and works like a macOS desktop. Plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Features

- Desktop with a menu bar, live clock, calendar widget, notes widget and desktop icons
- Dock with hover magnification and running-app indicators
- Draggable windows with close, minimise and zoom buttons
- Apps: About Me, Contact Me and Settings (My Projects is hidden for now)
- Settings: wallpaper, Dock position and size, clock format, reduce motion
- Responsive layout for phones and desktops

## Project structure

````
portfolio/
├── index.html      # page shell: menu bar, desktop and Dock containers
├── css/
│   └── style.css   # all styling
├── js/
│   └── main.js     # apps, windows, Dock logic, widgets, Settings
├── README.md
└── .gitignore
````

`index.html` loads `css/style.css` and `js/main.js`, so keep the folder names as they are.

## Run locally

1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in a browser.

## Customise

- **Your details:** edit the `APPS` object at the top of `js/main.js`.
- **Show projects:** remove `hide:1,` from the `projects` entry in `APPS`.
- **Colours, fonts, sizes:** edit `css/style.css`.
- **Contact form:** it opens the visitor's email app with the message filled in. To receive messages directly, connect a form service such as Formspree or Web3Forms.

## Deploy with GitHub Pages

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Choose the `main` branch and the root folder, then save.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Contact

- Email: rominkamidi82@gmail.com
- GitHub: https://github.com/runtimecraft-105
````
````

## .gitignore

````
# macOS / Windows
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Dependencies and logs
node_modules/
*.log
````

The `.gitignore` is a file with no name before the dot, so some systems hide it. In VS Code, create it with **New File** and type `.gitignore` as the name. If you'd rather not worry about that, the zip already has it.