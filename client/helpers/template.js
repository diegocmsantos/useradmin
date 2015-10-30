Template.registerHelper( 'isCurrentUser', function( currentUser ) {

  return currentUser === Meteor.userId() ? true : false;

});

Template.registerHelper( 'disableIfAdmin', function( userId ) {

  if ( Meteor.userId() === userId ) {
    return Roles.userIsInRole( userId, 'admin' ) ? "disabled" : "";
  }

});

Template.registerHelper( 'selected', function( v1, v2 ) {

  return v1 === v2 ? true : false;

});

Template.registerHelper( 'humanDate', function( timestamp ) {

  if ( timestamp ) {
    return moment( timestamp ).format( "MMMM Do, YYYY" );
  }
  
});
