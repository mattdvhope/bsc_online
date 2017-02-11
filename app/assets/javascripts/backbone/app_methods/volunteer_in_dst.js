function volunteerIsInDaylightSavingsTime() {

  var today = new Date(2017, 2, 12, 3);
  // var today = new Date();
  Date.prototype.stdTimezoneOffset = function() {
    if (this.getFullYear() === 2017) {
      return largerTzOffset(12, 5);
    }
    else if (this.getFullYear() === 2018) {
      return largerTzOffset(11, 4);
    }
    else if (this.getFullYear() === 2019) {
      return largerTzOffset(10, 3);
    }
    else if (this.getFullYear() === 2020) {
      return largerTzOffset(8, 1);
    }
    else if (this.getFullYear() === 2021) {
      return largerTzOffset(14, 7);
    }
    else if (this.getFullYear() === 2022) {
      return largerTzOffset(13, 6);
    }
    else {
      return largerTzOffset(10, 4);
    }
  }
  Date.prototype.dst = function() {
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
  }
  function largerTzOffset(marchDate, novDate) {
    return Math.max(march(marchDate).getTimezoneOffset(), november(novDate).getTimezoneOffset());
  }
  function march(date) {
    return new Date(today.getFullYear(), 2, date, 2);
  }
  function november(date) {
    return new Date(today.getFullYear(), 10, date, 2);
  }

  return today.dst()

}