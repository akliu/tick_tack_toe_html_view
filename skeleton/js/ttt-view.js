(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = window.TTT.View = function (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  };

  View.prototype.bindEvents = function (e) {
    // alert("Clicked!");
    e.preventDefault();
    var $square = $(e.target);
    // debugger;
    if ($square[0].id) {
      this.makeMove($square);
    }
    // var mm = this.makeMove($square)
    // mm();

  };

  View.prototype.makeMove = function ($square) {
    // ERROR WORKS BUT STILL CHANGES MARK
    try {
      $square.text(this.game.currentPlayer);
      var pos = this.convertor($square[0].id);
      this.game.playMove(pos);
    } catch (e) {
      alert(e.msg);
    }
    $square.css('background', 'white');
    if (this.game.isOver()) {
      if (this.game.winner()) {
        this.el.append('<h1>' + this.game.winner().toUpperCase() + ' wins!</h1>');
      } else {
        this.el.append('<h1>No one wins!</h1>');
      }
    }
  };

  View.prototype.setupBoard = function () {
    var $ul = $('<ul></ul>');
    for (var i = 0; i < 9; i++) {
        var $li = $("<li id=" + i +"></li>");
        $ul.append($li);
    }
      this.el.append($ul);
  };

  View.prototype.convertor = function (id) {
    id = parseInt(id);
    return [id % 3, Math.floor(id / 3)];
  };
})();
