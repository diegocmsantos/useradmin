var administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

var generateAccounts = function() {

  var fakeUserCount = 5,
      usersExist    = _checkIfAccountsExist( administrators.length + fakeUserCount );

  if ( !usersExist ) {
    _createUsers( administrators );
    _createUsers( _generateFakeUsers( fakeUserCount ) );
  }

};

var _checkIfAccountsExist = function( count ) {

  var userCount = Meteor.users.find().count();
  return userCount < count ? false : true;

};

var _createUsers = function( users ) {
  for ( var i = 0; i < users.length; i++ ) {
    var user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      var userId  = _createUser( user ),
          isAdmin = _checkIfAdmin( user.email );

      if ( isAdmin ) {
        Roles.setUserRoles( userId, 'admin' );
      } else {
        Roles.setUserRoles( userId, 'employee' );
      }
    }
  }
};

var _checkIfUserExists = function( email ) {
  return Meteor.users.findOne( { 'emails.address': email } );
};

var _createUser = function( user ) {
  var userId = Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });

  return userId;
};

var _checkIfAdmin = function( email ) {
  return _.find( administrators, function( admin ) {
    return admin.email === email;
  });
};

var _generateFakeUsers = function( count ) {
  var users = [];

  for ( var i = 0; i < count; i++ ) {
    users.push({
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),
      password: 'password'
    });
  }

  return users;
};

Modules.server.generateAccounts = generateAccounts;