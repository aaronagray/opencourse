Meteor.publish("userData", function () {
  return Meteor.users.find(
    {_id: this.userId},
    {fields: {'services.twitter': 1, 'services.github': 1}}
  );
});
