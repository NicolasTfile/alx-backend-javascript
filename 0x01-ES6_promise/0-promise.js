export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve();
    reject();
  });
}
