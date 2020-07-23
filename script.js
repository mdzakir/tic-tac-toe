var count = 0;

$(function () {
  let playerXName = $("#player-1").val();
  let playerOName = $("#player-2").val();

  $(".board .item").on("click", function () {
    var item = $(this);

    console.log("count", count, item.find("i").hasClass("fa-times"));

    if (oWinMadeit()) {
      $(".winner-announcement").html(playerOName + " wins");
      count = 0;
    } else if (xWinMadeit()) {
      $(".winner-announcement").html(playerXName + " wins");
      count = 0;
    } else if (count === 9) {
      !xWinMadeit() &&
        !oWinMadeit() &&
        $(".winner-announcement").html("There is a tie. Start a new game.");
      count = 0;
    } else if (item.hasClass("disabled")) {
      alert("Disabled!");
    } else if (count % 2 === 0) {
      count++;
      item.addClass(" disabled").html('<i class="fas fa-times"></i>');
      if (xWinMadeit()) {
        $(".winner-announcement").html(playerXName + " wins!");
      }
    } else {
      count++;
      console.log("oWinMadeit", oWinMadeit());
      item.addClass(" disabled").html('<i class="far fa-circle"></i>');
      if (oWinMadeit()) {
        $(".winner-announcement").html(playerOName + " wins!");
      }
    }
  });
});

function generateBoard() {
  var noofBoards = $(".board");
  var board = $(".board").clone();
  board.addClass("board-" + noofBoards);
}

const hasMarked = (cell, icon) => {
  return $(`.item-${cell} i`).hasClass(icon);
};

const checkForTheWin = (icon) => {
  let horizontalTop =
    hasMarked(1, icon) && hasMarked(2, icon) && hasMarked(3, icon);
  let horizontalMiddle =
    hasMarked(4, icon) && hasMarked(5, icon) && hasMarked(6, icon);
  let horizontalBottom =
    hasMarked(7, icon) && hasMarked(8, icon) && hasMarked(9, icon);

  let verticalLeft =
    hasMarked(1, icon) && hasMarked(4, icon) && hasMarked(7, icon);
  let verticalCenter =
    hasMarked(2, icon) && hasMarked(5, icon) && hasMarked(8, icon);
  let verticalRight =
    hasMarked(3, icon) && hasMarked(6, icon) && hasMarked(9, icon);

  let topLeftDiagonal =
    hasMarked(1, icon) && hasMarked(5, icon) && hasMarked(9, icon);
  let topRightDiagonal =
    hasMarked(3, icon) && hasMarked(5, icon) && hasMarked(7, icon);

  return (
    horizontalTop ||
    horizontalMiddle ||
    horizontalBottom ||
    verticalLeft ||
    verticalCenter ||
    verticalRight ||
    topLeftDiagonal ||
    topRightDiagonal
  );
};

function oWinMadeit() {
  console.log("o - clicked");
  return checkForTheWin("fa-circle");
}

function xWinMadeit() {
  console.log("x - clicked");
  return checkForTheWin("fa-times");
}

function displayBoard() {
  let playerXName = $("#player-1").val();
  let playerOName = $("#player-2").val();
  $("#player-1").parents(".player-name-wrapper").removeClass("error-input");
  $("#player-2").parents(".player-name-wrapper").removeClass("error-input");
  if (playerXName && playerOName) {
    $("#player-1").attr("readonly", true);
    $("#player-2").attr("readonly", true);
    $(".item").text("").removeClass("disabled");
    $(".winner-announcement").html("");
    $(".board").show();
    count = 0;
  } else {
    if ($("#player-1").val() === "") {
      $("#player-1").parents(".player-name-wrapper").addClass("error-input");
    } else {
      $("#player-1").parents(".player-name-wrapper").removeClass("error-input");
    }
    if ($("#player-2").val() === "") {
      $("#player-2").parents(".player-name-wrapper").addClass("error-input");
    } else {
      $("#player-2").parents(".player-name-wrapper").removeClass("error-input");
    }
  }
}
