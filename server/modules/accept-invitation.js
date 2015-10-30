var accept = function( options ) {

  var invite = _getInvitation( options.token );
  var user   = _createUser( options );

  _addUserToRole( user, invite.role );
  _deleteInvite( invite._id );

  return user;
  
};

var _createUser = function( options ) {

  var userId = Accounts.createUser( { email: options.email, password: options.password } );

  if ( userId ) {
    return userId;
  }

};

var _getInvitation = function( token ) {

  var invitation = Invitations.findOne( { "token": token } );

  if ( invitation ) {
    return invitation;
  }

};

var _deleteInvite = function( invite ) {

  Invitations.remove( { "_id": invite } );

};

var _addUserToRole = function( user, role ) {

  Roles.setUserRoles( user, role );

};

Modules.server.acceptInvitation = accept;