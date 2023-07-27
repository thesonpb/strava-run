# strava-run
A Strava-api-integrated app for running statistic, compare with your friend in the strava club
# How to run
1. Add .env file
2. Run command
```
yarn
```
```
yarn dev
```
# Api document
[Api reference](https://developers.strava.com/docs/reference/)

# Production build
```
yarn build
```

# Using netlify
1. Add `_redirects` file to public folder, with content `/*  /index.html  200`
2. Connect netlify to your github repo
2. Config build command 
3. Add .env file
4. Deploy