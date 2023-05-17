var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storageKeys = Object.keys(storage);
    var maxKey = 0;

    for (var key in storage) {
      if (maxKey === undefined) {
        maxKey = Number(key);
      } else if (Number(key) > maxKey) {
        maxKey = Number(key);
      }
    }

    storage[maxKey + 1] = value;
  };

  someInstance.dequeue = function() {
    var storageKeys = Object.keys(storage);

    var lowestKey;
    for (var key in storage) {

      if (lowestKey === undefined) {
        lowestKey = Number(key);
      } else if (Number(key) < lowestKey) {
        lowestKey = Number(key);
      }
    }

    var temp = storage[lowestKey];
    delete storage[lowestKey];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
