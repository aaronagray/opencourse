Template.MasterLayout.events({
  'click [data-action="remove"]': function(e) {
    var item = $(e.target).data('item');
    var type = $(e.target).data('type');
    if (type === 'resource')  Resources.remove(item);
    if (type === 'course')    Courses.remove(item);
  }
});

