Invitations = new Meteor.Collection( 'invitations' );

Invitations.allow({
  insert: function() { return false },
  update: function() { return false },
  remove: function() { return false }
});

Invitations.deny({
  insert: function() { return true },
  update: function() { return true },
  remove: function() { return true }
});

var InvitationsSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email to send invitation to."
  },
  token: {
    type: String,
    label: "Invitation token."
  },
  role: {
    type: String,
    label: "Role to apply to the user."
  },
  date: {
    type: String,
    label: "Invitation Date"
  }
});

Invitations.attachSchema( InvitationsSchema );