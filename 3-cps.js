3 major patterns in core node lib:

   - CPS
   - EventEmitter
   - Streams


// CPS pattern:
//   callback as last parameter
//     any error / exception during processing data is passed as first callbac parameter call
//     if no errors: first parameter set to null, others - "return value"
//       ( keep in mind that return here is different from "stack based function call return" )
//
//
function doSomething(param1, param2, param3, callback);
// often, when more than one parameters
function doSomething(paramsObject, callback);

// callback signature:
function doSomethingCallback(error, param1, param2);

/*
   expectations:

     - callback: might throw an exception. if doSomething needs to do extra after call better wrap it in try/catch
       at the same time, if you don't control doSomething - play nice and don't throw

     - caller: callback should be called exactly once. If you don't have any data - call it with empty result
       if you have error - call with error first parameter


*/

// Other patterns, popular in addition to these 3 (not used in node core)
//   Promises
//   Generators
//   flow control libraries: "async.js", "step" etc
//
