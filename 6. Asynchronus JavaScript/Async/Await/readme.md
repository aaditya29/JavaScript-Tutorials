# Async/Await Function in JavaScript

## Introduction

Async/Await is the extension of promises which we get as a support in the language JavaScript.

### Async:

It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. <br>
Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value. <br>

```
const getData = async() => {
	var data = "Hello World";
	return data;
}

getData().then(data => console.log(data));
```

#### Output:

Hello World<br>

### Await

Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.<br>

```
const getData = async() => {
	var y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);

```

#### Output:

1<br>
2<br>
Hello World<br>

Notice that the console prints 2 before the “Hello World”. This is due to the usage of the await keyword.
