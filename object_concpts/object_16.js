function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (let i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(invert_key_value({vaishnavi: "#1", Sumit: "#2", Toshniwal: "#3"}));