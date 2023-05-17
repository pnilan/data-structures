var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    var maxKey = 0;

    for (var key in this.storage) {
      if (Number(key) > maxKey) {
        maxKey = Number(key);
      }
    }

    this.storage[maxKey + 1] = value;

  },
  dequeue: function() {
    var minKey;

    for (var key in this.storage) {
      if (minKey === undefined || minKey > Number(key)) {
        minKey = Number(key);
      }
    }

    var tempValue = this.storage[minKey];
    delete this.storage[minKey];
    return tempValue;

  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


