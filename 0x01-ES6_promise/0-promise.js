export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('All good!');
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000);
  });
}
