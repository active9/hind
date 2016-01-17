#Hind
![Simple Javascript Function Hooking](https://raw.githubusercontent.com/active9/hind/master/hind.png)

Hind is a simple post function hook written in NodeJS.

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/hind
cd hind*
npm install
```

Using NPM:
```bash
npm install hind
```

#MODULE
Hind may run included as a module in your projects.
```js
var hind = require('hind');

function testFunction() {
	console.log('I am testFunction');
}

testFunction = hind(testFunction, function(func) {
	func();
	console.log('This was called after testFunction');
});

testFunction();


```

#EXAMPLES
More examples in the [examples](https://github.com/active9/hind/tree/master/examples) folder on the github repo.

~Enjoy!

#CONTRIB

Hind is open-source via the MIT license we encourage Forking.

#LICENSE
MIT



