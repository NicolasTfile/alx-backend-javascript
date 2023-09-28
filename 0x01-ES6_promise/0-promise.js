function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The API is not working correctly'));
  });
}

export default getResponseFromAPI;
