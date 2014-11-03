Resources = new Meteor.Collection('resources');

Resources.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 50
  },
  url: {
    type: String,
    label: 'URL',
  },
  user: {
    type: String,
    label: 'User'
  },
  course: {
    type: String,
    label: 'Course'
  },
  action: {
    type: String
  },
  cost: {
    type: Number,
    label: 'Cost',
    optional: true
  },
  description: {
    type: String,
    label: 'Description',
    optional: true
  },
  complete: {
    type: Boolean,
    optional: true
  },
  topic: {
    type: String,
    label: 'Topic',
    optional: true
  }
}));
