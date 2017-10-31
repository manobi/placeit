QUnit.module( "placeit" );
QUnit.test( "No order", function( assert ) {
  let $itemList = $('#test-no-order .item-list');
  const intialLength = $itemList.find('li').length;
  $('#test-no-order .new-item').placeit($itemList);
  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.find('li:last-child').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "First order", function( assert ) {
  let $itemList = $('#first-order .item-list');
  const intialLength = $itemList.find('li').length;
  $('#first-order .new-item').placeit($itemList, 0);
  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:nth-child(1)').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Last order", function( assert ) {
  let $itemList = $('#last-order .item-list');
  const intialLength = $itemList.find('li').length;

  let $newItem = $('#last-order .new-item').placeit($itemList, 3);

  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:nth-child(3)').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Less order", function( assert ) {
  let $itemList = $('#less-order .item-list');
  const intialLength = $itemList.find('li').length;

  let $newItem = $('#less-order .new-item').placeit($itemList, 2);

  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:nth-child(2)').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Negative order", function( assert ) {
  let $itemList = $('#negative-order .item-list');
  const intialLength = $itemList.find('li').length;

  $('#negative-order .new-item').placeit($itemList, -1);

  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:nth-child(1)').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Infinity order", function( assert ) {
  let $itemList = $('#infinity-order .item-list');
  const intialLength = $itemList.find('li').length;

  let $newItem = $('#infinity-order .new-item').placeit($itemList, Infinity);

  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:last-child').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Same context", function( assert ) {
  let $itemList = $('#same-context .item-list');
  const intialLength = $itemList.find('li').length;

  let $newItem = $('#same-context .new-item').placeit($itemList, -1);

  assert.equal($itemList.find('li').length, intialLength);
  assert.ok($itemList.children('li:first-child').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.test( "Same order", function( assert ) {
  let $itemList = $('#same-order .item-list');
  const intialLength = $itemList.find('li').length;
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  $('#same-order .new-item').placeit($itemList, -1);
  let $newItem = $('#same-order .new-item').placeit($itemList, -1);

  assert.equal($itemList.find('li').length, intialLength);
  assert.ok($itemList.children('li:first-child').hasClass('new-item'), 'The element has been placed in the right place');
});

QUnit.module( "restore" );
QUnit.test( "Restore to parent", function( assert ) {
  let $itemList = $('#restore .item-list');
  const intialLength = $itemList.find('li').length;
  let $newItem = $('#restore .new-item').placeit($itemList, 0);
  assert.equal($itemList.find('li').length, intialLength + 1);
  assert.ok($itemList.children('li:nth-child(1)').hasClass('new-item'), 'The element has been placed in the right place');
  $newItem.restore();
  assert.ok($('#restore > .new-item').is($newItem), 'The element had been restored to it\'\s original placement');
});
