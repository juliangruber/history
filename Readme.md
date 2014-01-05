
# history

  Browser-like history object

  [![build status](https://secure.travis-ci.org/juliangruber/history.png)](http://travis-ci.org/juliangruber/history)

  [![testling badge](https://ci.testling.com/juliangruber/history.png)](https://ci.testling.com/juliangruber/history)

## Example

```js
var History = require('history');

var history = new History();
history.go('one'); // current: 'one'
history.go('two'); // current: 'two'
history.back();    // current: 'one'
history.back();    // current: 'one'
history.go('ooh'); // current: 'ooh'
history.back();    // current: 'one'
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install juliangruber/history

  Install with [npm](https://npmjs.org):

    $ npm install juliangruber/history

## API

### History()

  Create a new history.

### History#go(state)

  Go to `state`.

  If the current `state` isn't at the end of the history, the rest will be removed, just like browsers do.

### History#back()

  Go back.

### History#forward()

  Go forward.

### History#current()

  Get the current `state`.

### History#on('go', fn(state))

  Listen for `state` changes.

## License

  MIT
