# DOM
## Attributes

+ `getAttribute('attribute')`
  + This method will return a const (the value of the attribute)
  + It works on an object `document.getElementById('students').getAttribute('id');`
## Methods

### `getElementById()`
```html
<div id="student"></div>
```
```javascript
document.getElementById('student');
```

### `getElementsByClassName()`
```html
<div class="student"></div>
```
```javascript
document.getElementsByClassName('student');
```
### `getElementsByName()`
```html
<input type="text" name="up" />
```
```javascript
document.getElementsByName('up');
```
### `getElementsByTagName()`
```html
<h1>A Title</h1>
```
```javascript
document.getElementsByTagName('h1');
```
### `querySelector()`
``` html
<div id="student"></div>
```
```javascript
document.querySelector('#student');
```

### `querySelectorAll()`
```html
<div class="student"></div>
<div id="location">…</div>
```
``` javascript
document.querySelectorAll('.student #location');
```

## Read Data from External JSON Files

````javascript
let dataSource = "the_name_of_external_files.json";

fetch(dataSource)
    .then((response)=>{
            return response.json();
        })
    .then((data)=>{
        // now you have the json data, so this is the place where
        // you can work with it
    })
    .catch((err)=>{
        
    })
````