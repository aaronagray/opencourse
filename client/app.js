/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

// Half of these need to move into form helpers// Half of these need to move into form helpers..

App.helpers = {
  selectActionOptions: function() {
    return [
      {label: 'Read', value: 'book'},
      {label: 'Watch', value: 'play-circle'},
      {label: 'Do', value: 'code'}
    ]
  },
  selectCourseOptions: function() {
    return Courses.find().map(function (c) {
      return {label: c.title, value: c._id };
    });
  },
  courseSubjectOptions: function() {
    var resource = Resources.findOne();
    var course;
    if (resource) {
      course = Courses.findOne(resource.course);
    } else {
      course = Courses.findOne(Session.get('SelectedCourse')); 
    }
      return course.topics.map(function(s) {
        return {label: s, value: s};
      });
  },
  // #LOLZ
  hasPrivs: function( item ) {
    if (item.user === Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  },
  userId: function() {
    return Meteor.userId();
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
