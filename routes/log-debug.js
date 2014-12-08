'use strict';
module.exports = function(funcName, func, args) {

  console.log();
  console.log('  Function: ' + funcName);
  console.log();

  console.log('  Function arguments: ');

  for (var i = 0; i < args.length; i++) {
    printDebug(args[i], 'Argument ' + i + ' :');
  }

  console.log();

  var result = func.apply(null, args);
  console.log('  Function returns: ');
  printDebug(result, '');
  console.log();

  function printDebug(argu, argumentString) {
    switch (typeof (argu)) {
      case 'array':
        return console.log('    ' + argumentString + '(array)' + ' --> ' + argu);
      case 'object':
        if (Object.prototype.toString.call(args[i]) === '[object Array]') {
          return console.log('    ' + argumentString + '(array)' + ' --> ' + args[i]);
        }
        return console.log('    ' + argumentString + '(object) --> ' + JSON.stringify(argu));
      case 'function':
        var argFunc = argu.toString();
        argFunc = argFunc.substr('function '.length);
        argFunc = argFunc.substr(0, argFunc.indexOf('('));
        return console.log('    ' + argumentString + '(function) --> ' + argFunc);
      default:
        return console.log('    ' + argumentString + '(' + typeof (argu) + ') --> ' + argu);
    }
  }

  return result;
};
