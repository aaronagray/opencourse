/*****************************************************************************/
/* CoursesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('courses_index', function () {
  return Courses.find({'public': true});
});

Meteor.publish('my_courses', function (scope) {
  return Courses.find({'user': this.userId});
});

Meteor.publish('course', function(courseId) {
  return Courses.find(courseId);
});
