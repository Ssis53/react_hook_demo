
export const asyncAdd = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      resolve(val1 + val2);
    }, 1234)
  });
}