export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
    //same as (different methods of writing the same thing)
    //firstName,
    //lastName
  });
}
