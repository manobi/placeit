# jQuery Placeit
Move the element wherever you want and restore it to the original place.

## API

#### HTML:
``` HTML
<div class="test" id="restore">
  <li class="new-item">New item</li>
  <ul class="item-list">
    <li>item</li>
    <li>item</li>
    <li>item</li>
  </ul>
</div>
```

#### Placing
```javascript
// Moves the 'new-item' to the beggining of the list
let $newItem = $('#restore .new-item').placeit($('#restore .item-list'), 0);
```

#### Result:
``` HTML
<div class="test" id="restore">
  <!-- Item original location -->
  <ul class="item-list">
    <li class="new-item">New item</li> <!-- Have being moved to here -->
    <li>item</li>
    <li>item</li>
    <li>item</li>
  </ul>
</div>
```

#### Restoring
```javascript
// Restore it's original position outside the list
$newItem.restore();
```

#### Result:
``` HTML
<div class="test" id="restore">
  <li class="new-item">New item</li><!-- It's back -->
  <ul class="item-list">
     <!-- No more here :( -->
    <li>item</li>
    <li>item</li>
    <li>item</li>
  </ul>
</div>
```

## Examples:

### No order
```javascript
$('#test-no-order .new-item').placeit($itemList);
```

### First order
```javascript
$('#first-order .new-item').placeit($itemList, 0);
```

### Last order
```javascript
let $newItem = $('#last-order .new-item').placeit($itemList, 3);
```

### Less order
```javascript
let $newItem = $('#last-order .new-item').placeit($itemList, 3);
```

### Less order
```javascript
let $newItem = $('#less-order .new-item').placeit($itemList, 2);
```

### Negative order
```javascript
$('#negative-order .new-item').placeit($itemList, -1);
```

### Infinit order
```javascript
let $newItem = $('#infinity-order .new-item').placeit($itemList, Infinity);
```

### Same context
```javascript
let $newItem = $('#same-context .new-item').placeit($itemList, -1);
```

### Same Order
```javascript
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);
$('#same-order .new-item').placeit($itemList, -1);

let $newItem = $('#same-order .new-item').placeit($itemList, -1);
```

### Restore
```javascript
let $newItem = $('#restore .new-item').placeit($itemList, 0);
$newItem.restore();
```
