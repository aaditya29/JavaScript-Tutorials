# CallBack Functions in JavaScript

## Introduction

JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.<br>
<b>Callbacks</b> make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

### Example:

Normal Function

```
function one(){
    console.log(" step 1");
}

function two(){
    console.log(" step 2");
}
one();
two();
```

<b>Output:</b>
Step 1
Step 2
