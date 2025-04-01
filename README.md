# Portfolio Photographe

Un portfolio élégant et moderne pour photographe, construit avec Astro et Tailwind CSS.

## Caractéristiques

- Design sombre et élégant
- Galerie photo responsive
- Page de contact avec formulaire
- Navigation fluide
- Optimisé pour les performances

## Installation

1. Clonez le repository :
```bash
git clone [url-du-repo]
cd portfolio-clement
```

2. Installez les dépendances :
```bash
npm install
```

3. Ajoutez vos photos dans le dossier `public/gallery/`

4. Lancez le serveur de développement :
```bash
npm run dev
```

5. Ouvrez [http://localhost:4321](http://localhost:4321) dans votre navigateur

## Personnalisation

### Images
- Placez vos images dans le dossier `public/gallery/`
- Mettez à jour le tableau `photos` dans `src/pages/galerie.astro` avec vos images
- Ajoutez une image hero dans `public/hero-image.jpg`
- Ajoutez des images pour la section "À propos" dans `public/about-1.jpg` et `public/about-2.jpg`

### Couleurs
Les couleurs peuvent être personnalisées dans `tailwind.config.mjs`

### Texte
Modifiez les textes dans les fichiers correspondants :
- `src/pages/index.astro` pour la page d'accueil
- `src/pages/galerie.astro` pour la galerie
- `src/pages/contact.astro` pour la page de contact

## Technologies utilisées

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
