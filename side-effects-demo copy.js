function connectDatabase() {
  const didConnect = database.connect(); //changed system state, somewhat expected maybe rename
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!');
    return false;
  }
}

//soln
function createDatabaseConnection() { //better
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!');
    return false;
  }
}

//teacher soln
function initApp(){
  const success = createDatabaseConnection()
  if (!success){
    console.log('Could not connect to database!');
  }
}
function createDatabaseConnection() { //better
  const didConnect = database.connect();
  return didConnect;
}

//
function determineSupportAgent(ticket) { //2 side effects, unexpected
  if (ticket.requestType === 'unknown') {
    return findStandardAgent(); //side effect, 
  }
  return findAgentByRequestType(ticket.requestType); //side effect
}

//soln
function getSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent(); //side effect, 
  }
  return findAgentByRequestType(ticket.requestType); //side effect
}

//
function isValid(email, password) { //no side effect, but better name
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!');
    return false;
  }
  return true;
}

//soln
function isValidInput(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!');
    return false;
  }
  return true;
}

//teacher soln
//logging is a side effect
//boolean functions should only return true/false

function createUser(email, password){
  if (!isValid(email, password)){
    console.log('Invalid input!');
  }
  //..create user
}
function isValid(email, password) {
  return (!email.includes('@') || password.length < 7)
}