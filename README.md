# reposense-wizard

## Project setup from scratch

1.
```
yarn install
```

2. Create an OAuth App using the instructions [here](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) and note down the `client_id` and `client_secret`

3. Set up [Gatekeeper](https://github.com/prose/gatekeeper) using the above information and host it.

4. Copy `.env.local.example` to `.env.local` then fill in the fields in .env.local with the correct values.

## Quick Project setup
1.
```
yarn install
```

2. Copy `.env.local.example` to `.env.local`

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## Quick Project deployment to gh-pages
```
yarn run deploy
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
