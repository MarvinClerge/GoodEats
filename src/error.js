export default class Error {

  static signup(errors){
    // array that will contain all error messages
    const result = []

    // get the object keys for each error catagory
    Object.keys(errors).forEach(key => {
      // iterate thorugh each key in error object
      errors[key].forEach(error => {
        // combine the key and error for message
        const message = `${key} ${error}`

        // add to result based on message
        switch (message) {
          case "username has already been taken":
            // If the user name already exists
            result.push("Username is unavalible")
            break;
          case "password_confirmation doesn't match Password":
            // If password and password confirmation dont match
            result.push("Passwords must match")
            break;
        }
      })
    })

    // return the array of error messages
    console.log(result);
    return result
  }

  static login(data) {

  }
}
