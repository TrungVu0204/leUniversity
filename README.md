## Get Started

Clone, or fork the project, then using the command to start watching and developing

```bash
yarn dev
```

The project was built using VuePress v2.0, which the documentation can be found [here](https://vuepress.vuejs.org). To create a page, simply create an markdown file inside the directory you wanted.

## Components

There are two components which are created by the project: **Calculator** and **LandingAction**, which can be use like the example below.

```markdown
---
landingButton:
  - title: "the title"
    description: "the description"
    link: /the-link
---

# Hi, what do you want to do?

<LandingAction />
```
```markdown
# The scoring calculator

<Calculator />
```

## Deploy
The project was deploy on [Vercel](https://vercel.dev), but you can deploy anywhere including Github Pages or even Cloudflare Pages.