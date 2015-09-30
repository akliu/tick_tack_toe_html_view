(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  };

  View.prototype.bindEvents = function () {
  };

  View.prototype.makeMove = function ($square) {
  };

  View.prototype.setupBoard = function () {
    var $ul = $('<ul></ul>');
    for (var i = 0; i < 9; i++) {
        var $li = $('<li></li>');
        $ul.append($li);
    }
      this.el.append($ul);
  };
})();
