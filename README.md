# vuedemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1. Dolpoy to app service using container image from docker hub. Create dockerfile and build. Then push that image to docker hub.

`docker build -t prisar/vuedemo:1.0 .`
`docker push prisar/vuedemo:1.0`
