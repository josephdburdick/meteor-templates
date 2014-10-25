Meteor.publish('posts', function() {
	// https://book.discovermeteor.com/chapter/publications-and-subscriptions
  return Posts.find();
});
