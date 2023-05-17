var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[Object.keys(this.storage).length - 1] = value;
  },
  pop: function() {
    var maxKey;
    for (var key in this.storage) {
      if (maxKey === undefined || maxKey < Number(key)) {
        maxKey = Number(key);
      }
    }

    var tempValue = this.storage[maxKey];
    delete this.storage[maxKey];
    return tempValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


