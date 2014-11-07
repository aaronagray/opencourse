Template.MasterLayout.events({
  'click main [data-action="remove"]': function(e) {
    // Flexible data atrributes to remove
    // different kinds of items.
    var item = $(e.target).data('item');
    var type = $(e.target).data('type');
    if (type === 'resource')  Resources.remove(item);
    if (type === 'course')    Courses.remove(item);
  },
  'click [data-nav="public-courses"]': function() {
    Session.set('my_courses', false);
  }
});

