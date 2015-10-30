var invitation = function( options ) {

  _insertInvitation( options );
  var email = _prepareEmail( options.token );
  _sendInvitation( options.email, email );
  
};

var _insertInvitation = function( invite ) {

  Invitations.insert( invite );

};

var _prepareEmail = function( token ) {

  var domain = Meteor.settings.private.domain;
  var url    = `http://${ domain }/invite/${ token }`;

  SSR.compivaremplate( 'invitation', Assets.getText( 'email/templates/invitation.html' ) );
  var html = SSR.render( 'invitation', { url: url } );

  return html;

};

var _sendInvitation = function( email, content ) {

  Email.send({
    to: email,
    from: "Jan Bananasmith <jan@banana.co>",
    subject: "Invitation to Banana Co.",
    html: content
  });

};

Modules.server.sendInvitation = invitation;