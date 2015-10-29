Invitations = new Meteor.Collection('invitations');

Invitations.allow({
  insert: (function(_this) {
    return function() {
      return false;
    };
  })(this),
  update: (function(_this) {
    return function() {
      return false;
    };
  })(this),
  remove: (function(_this) {
    return function() {
      return false;
    };
  })(this)
});

Invitations.deny({
  insert: (function(_this) {
    return function() {
      return true;
    };
  })(this),
  update: (function(_this) {
    return function() {
      return true;
    };
  })(this),
  remove: (function(_this) {
    return function() {
      return true;
    };
  })(this)
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

Invitations.attachSchema(InvitationsSchema);