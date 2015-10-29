authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action: function() {
    BlazeLayout.render( 'default', { yield: 'users' } );
  }
});

authenticatedRoutes.route( '/managers', {
  name: 'managers',
  triggersEnter: [ blockUnauthorizedManager ],
  action: function() {
    BlazeLayout.render( 'default', { yield: 'managers' } );
  }
});

authenticatedRoutes.route( '/employees', {
  name: 'employees',
  action: function() {
    BlazeLayout.render( 'default', { yield: 'employees' } );
  }
});