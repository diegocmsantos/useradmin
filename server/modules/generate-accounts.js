var administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

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

var _checkIfAdmin = function( email ) {
  return _.find( administrators, function( admin ) {
    return admin.email === email;
  });
};

Modules.server.generateAccounts = generateAccounts;