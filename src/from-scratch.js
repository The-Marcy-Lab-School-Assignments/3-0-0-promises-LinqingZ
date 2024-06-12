// Q1
const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

console.log(resolvedWrapper(10));
resolvedWrapper(10).then(console.log);

// Q2
const rejectedWrapper = (value) => {
  return Promise.reject(new Error(value));
};

// Q3
const handleResolvedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value);
    return value; // Return the resolved value
  });
};
//   return promise
//     .then((value) => {
//       console.log(value);
//       return value; // Return the resolved value
//     })
//     .catch((error) => {
//       console.log(error);
//       return Promise.reject(error); // Return the rejected value
//     });
// };

handleResolvedPromise(Promise.resolve("yo"));
// Logs "yo"

handleResolvedPromise(Promise.resolve("yo")).then((val) =>
  console.log(`we still have ${val}`)
);
// Logs "yo" and "we still have yo"
// We still have access to "yo" since it's also returned as a Promise

// Q4
// const handleResolvedOrRejectedPromise = (promise) => {
//   return promise
//     .then((value) => {
//       console.log(value);
//       return value;
//     })
//     .catch((error) => {
//       console.log(new Error(`Your error message was: ${error.message}`));
//       return null; 
//     });
// };

// const handleResolvedOrRejectedPromise = (promise) => {
//   return promise
//     .then((value) => {
//       console.log(value);
//       return value;
//     })
//     .catch((error) => {
//       const newError = new Error(`Your error message was: ${error.message}`);
//       console.log(newError);
//       return newError; 
//     });
// };

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      logError(`Your error message was: ${error.message}`);
      return null; 
    });
};

handleResolvedOrRejectedPromise(Promise.resolve("success"))
  .then((val) => console.log(`Resolved value: ${val}`))
  .catch((error) => console.log(`Error: ${error.message}`));

handleResolvedOrRejectedPromise(Promise.reject(new Error("failure")))
  .then((val) => console.log(`Resolved value: ${val}`))
  .catch((error) => console.log(`Error: ${error.message}`));

// Q5
const pauseForMs = (promise) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, promise);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
