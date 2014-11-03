Courses = new Meteor.Collection('courses');

Courses.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  'tax.category': {
    type: String,
    label: 'Category',
    optional: true
  },
  'tax.subject': {
    type: String,
    label: 'Subject',
    optional: true
  },
  topics: {
    type: [String],
    label: 'Topics',
    optional: true
  },
  description: {
    type: String,
    label: 'Description'
  },
  user: {
    type: String,
    label: 'User'
  }
}));
