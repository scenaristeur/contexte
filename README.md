# contexte

- https://www.linkedin.com/posts/ashleighnfaith_is-rdf-just-a-shortcut-or-is-it-too-early-activity-7034501147004391424-GOg3
- https://medium.com/@dallemang/why-im-not-excited-about-rdf-star-5f1993fd0ead
- https://www.youtube.com/watch?v=gTMvHJdMnzI

# one contexte to rule them all 
- https://fr.wikipedia.org/wiki/QQOQCCP
- https://www.wikidata.org/wiki/Wikidata:Data_access/fr



# gh-pages
- update publicPath in vue.config.js
- build 
- create subbranch with dist folder & comment the dist folder in the .gitignore file
- publish to gh-pages
- add npm scripts


```
npm run build
git add dist -f && git commit -m "Initial dist subtree commit"
git add .
git push && git subtree push --prefix dist origin gh-pages
```
- add 2 lines in scripts of package.json
```
    "git": "npm run build && git add . && git commit -m",
    "postgit": "git push && git subtree push --prefix dist origin gh-pages"
```
- add in updated function of /src/registerServiceWorker.js the line `alert('New content is available; please close the app & re-open.')`

- now publish with `  npm run git -- "my commit message"  `



## Project setup
```
npm install
```

## bootstrap
- https://www.harubears.com/en/bootstrap5-button-with-vue3-cli/

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
