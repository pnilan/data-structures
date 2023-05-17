var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  };

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;

};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var tempValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return tempValue;

};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


