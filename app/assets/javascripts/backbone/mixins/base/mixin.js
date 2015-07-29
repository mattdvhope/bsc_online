App.Mixin = {
  extend: function(mixin) {
    var key, ref, value;
    for (key in mixin) {
      value = mixin[key];
      if (key !== 'extend' && key !== 'include') {
        this[key] = value;
      }
    }
    if ((ref = mixin.extended) != null) {
      ref.apply(this);
    }
    return this;
  },
  include: function(mixin) {
    var key, ref, value;
    for (key in mixin) {
      value = mixin[key];
      if (key !== 'extend' && key !== 'include') {
        this.prototype[key] = value;
      }
    }
    if ((ref = mixin.included) != null) {
      ref.apply(this);
    }
    return this;
  }
};