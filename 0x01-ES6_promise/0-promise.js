export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve();
    reject(Error('The API is not working correctly'));
  });
}
