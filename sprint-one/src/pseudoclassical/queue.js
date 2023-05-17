var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var maxKey = 0;
  for (var key in this.storage) {
    if (Number(key) > maxKey) {
      maxKey = Number(key);
    }
  }

  this.storage[maxKey + 1] = value;
};

Queue.prototype.dequeue = function() {
  var minKey;
  for (var key in this.storage) {
    if (minKey === undefined || Number(key) < minKey) {
      minKey = Number(key);
    }
  }

  var tempValue = this.storage[minKey];
  delete this.storage[minKey];
  return tempValue;

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


