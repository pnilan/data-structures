var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  };

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var maxKey =  0;
  for (var key in this.storage) {
    if (Number(key) > maxKey) {
      maxKey = Number(key);
    }
  }

  this.storage[maxKey + 1] = value;
  console.log('enqueue: ' + value + ', '+ JSON.stringify(this.storage));
};

queueMethods.dequeue = function() {
  var minKey;
  for (var key in this.storage) {
    if (minKey === undefined || minKey > Number(key)) {
      minKey = Number(key);
    }
  }

  var tempValue = this.storage[minKey];
  delete this.storage[minKey];
  console.log('dequeue: ' + tempValue + ', ' + JSON.stringify(this.storage));
  return tempValue;

};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

