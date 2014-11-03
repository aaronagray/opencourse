Template.ResourceSingle.helpers({
  resource: function() {
    return Resources.findOne();
  },
  isVideo: function () {
    // https://www.youtube.com/watch?v=R8W_6xWphtw
    var resource = Resources.findOne();
    if (resource.action === 'play-circle') return true;
    return false;
  },
  isVimeo: function() {
    var resource = Resources.findOne();
    if (resource.url.indexOf("vimeo") > -1) return true;
  },
  isYouTube: function() {
    var resource = Resources.findOne();
    if (resource.url.indexOf("youtube") > -1) return true;
  },
  youtube: function () {
    var resource = Resources.findOne();
    return resource.url.split('watch?v=')[1];
  },
  vimeo: function () {
    var resource = Resources.findOne();
    return resource.url.split('.com/')[1];
  },
});
