# Reactor #

Easy to use react boilplate based off create-react-app. React router for navigation, redux for state management and a modified airbnb eslint ruleset.

## Tech ##

* React 16
* react-router
* Webpack 3
* Redux
    * [ducks](https://github.com/erikras/ducks-modular-redux)


## Folder structure ##
```
/src
 /css            <- Stylesheets
  /common        <-  common css (resets, base, fonts)
 /middleware     <- redux middleware reducers (ajax, sideeffects, etc)
 /modules        <- redux state reducers
 /components     <- react component lib
  /shared        <-  Shared
  /screens       <-  Page layout (usually an endpoint as well)
```



