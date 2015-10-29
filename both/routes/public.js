publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/invite/:token', {
  name: 'invite',
  action: function() {
    BlazeLayout.render( 'default', { yield: 'invite' } );
  }
});