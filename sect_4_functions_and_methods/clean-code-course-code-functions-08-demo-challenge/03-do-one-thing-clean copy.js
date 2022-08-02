function createUser(email, password) {
  try{
    validateInput(email, password)
    createUser(email, password)
    runQuery(user)

  } catch (error){
    logError(error.message)
  }
}

function logError(message){
  console.log(message);
}

function isNotBlank(email, password){
    return (!email || !password);
}

function inputIsValid(email, password){
  return (
    !email.includes('@') ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/.test(
      password
    ) ||
    password.length < 7
  )
}

function validateInput(email, password){
  if (!isNotBlank(email, password)){
    throw new Error('Both email and password must be provided!');
  }
  if (!inputIsValid(email, password)){
    throw new Error('Email or password is invalid!');
  }
}

function createUser(email, password) {
  const user = {
    email: email,
    password: password,
  };
}

function runQuery(user){
  const query =
    'INSERT INTO users VALUES (' + user.email + ', ' + user.password + ')';
  database.runQuery(query);
}