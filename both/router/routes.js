/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {

  this.route('site.index', {path: '/'});
  this.route('courses.index', {
    path: '/courses'
  });
  this.route('course.single', {path: 'course/:_id'});

  this.route('edit.course', {
    path: 'course/:_id/edit',
    data: {
      course: function() {
        return Courses.findOne();
      }
    }
  });

  this.route('new.course', {path: 'courses/new'});
  this.route('resources.index', {path: '/resources'});
  this.route('new.resource', {path: '/resources/new'});
  this.route('edit.resource', {path: '/resources/:_id/edit'});
  this.route('resource.single', {path: '/resource/:_id'});

});
