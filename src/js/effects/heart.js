(function() {

var heartAnimation = function(ct, newView, oldView, callback, animation){

  var newEl = newView.$(),
      oldEl = oldView.$();

  oldEl.bind('webkitAnimationEnd animationend', navigationEndHandler);

  window.scrollTo(0, 0); // fix iOS bug

  oldEl.addClass(animation + ' out');
  newEl.addClass(animation + ' in current');

  function navigationEndHandler(event) {

    oldEl.unbind('webkitAnimationEnd animationend', navigationEndHandler);

    oldEl.removeClass(animation + ' out current');
    newEl.removeClass(animation + ' in');

    callback();
  }
};

Ember.AnimatedContainerView.registerEffect('dissolve', function(ct, newView, oldView, callback) {
  heartAnimation(ct, newView, oldView, callback, 'dissolve');
});
Ember.AnimatedContainerView.registerEffect('slideRight', function(ct, newView, oldView, callback) {
  heartAnimation(ct, newView, oldView, callback, 'slideright');
});
Ember.AnimatedContainerView.registerEffect('slideLeft', function(ct, newView, oldView, callback) {
  heartAnimation(ct, newView, oldView, callback, 'slideleft');
});

})();
