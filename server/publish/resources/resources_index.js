/*****************************************************************************/
/* ResourcesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('resources_index', function () {
  return Resources.find();
});



Meteor.publish('course_resources', function (courseId) {
  return Resources.find({course: courseId});
});

Meteor.publish('resource', function(resourceId) {
  return Resources.find(resourceId);
});
