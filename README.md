# React LifeCycle (remobile)
A react lifecycle for react and react-native

## Installation
```sh
npm install @remobile/react-lifecycle --save
```
### Usage
```js
var LifeCycle = require('@remobile/react-lifecycle');
module.exports = React.createClass({
    mixins: [LifeCycle('view', 1)],
    ...
});
```
### Params
- LifeCycle(tag, level)
    - tag : tag for component, e.g: 'view'
    - level : level of component

### Console
```js
|______: [view]:getDefaultProps
app.js:11464 |___: [app]:getDefaultProps
app.js:11459 |___: [app]:getInitialState
app.js:11469 |___: [app]:componentWillMount
app.js:11459 |______: [view]:getInitialState
app.js:11469 |______: [view]:componentWillMount
app.js:11473 |______: [view]:componentDidMount
app.js:11473 |___: [app]:componentDidMount
app.js:11481 |___: [app]:shouldComponentUpdate[nextProps: Object {} nextState: Object {curPage: Object, rightPage: Object} ]
app.js:11486 |___: [app]:componentWillUpdate[nextProps: Object {} nextState: Object {curPage: Object, rightPage: Object} ]
app.js:11477 |______: [view]:componentWillReceiveProps[nextProps: Object {curPage: Object, rightPage: Object} ]
app.js:11481 |______: [view]:shouldComponentUpdate[nextProps: Object {curPage: Object, rightPage: Object} nextState: Object {} ]
app.js:11486 |______: [view]:componentWillUpdate[nextProps: Object {curPage: Object, rightPage: Object} nextState: Object {} ]
app.js:11490 |______: [view]:componentDidUpdate[prevProps: Object {curPage: Object, rightPage: undefined} prevState: Object {} ]
app.js:11490 |___: [app]:componentDidUpdate[prevProps: Object {} prevState: Object {curPage: Object} ]
```
