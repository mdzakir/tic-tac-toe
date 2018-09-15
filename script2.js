

$(function(){

	// click toe
	var count = 0;
	$('.board .item').on('click', function () {
		var item = $(this); 

		if( oWinMadeit() ) {
			$('.winner-announcement').html($('#player-2').val() + ' wins');
			count = 0;
		} else if ( xWinMadeit() ){
			$('.winner-announcement').html($('#player-1').val() + ' wins');
			count = 0;
		} else if(count === 9){
			alert('there is a tie. start a new game.')
			count = 0;
		} else if( item.hasClass('disabled') ) {
			alert('disabled!');
		} else if (count % 2 === 0){
			count++;
			var nameOfPlayer1 = $('#player-1').val().substr(0,1);
			item.addClass(' disabled').text(nameOfPlayer1);
			if(xWinMadeit(nameOfPlayer1)) {
				$('.winner-announcement').html($('#player-1').val() + ' wins');
			};
		} else {
			count++;
			var nameOfPlayer2 = $('#player-2').val().substr(0,1);
			item.addClass(' disabled').text(nameOfPlayer2);
			if(oWinMadeit(nameOfPlayer2)) { 
				$('.winner-announcement').html($('#player-2').val() + ' wins');
			};
		}

	});

});


function generateBoard(){
	var noofBoards = $('.board');
	var board = $('.board').clone();
	board.addClass('board-'+noofBoards);
}

/*
checkChar(char){

}*/

function oWinMadeit(p1) {
	return $('.item-1').text() === p1 && $('.item-2').text() === p1 && $('.item-3').text() === p1
			|| $('.item-4').text() === p1 && $('.item-5').text() === p1 && $('.item-6').text() === p1
			|| $('.item-7').text() === p1 && $('.item-8').text() === p1 && $('.item-9').text() === p1
			|| $('.item-1').text() === p1 && $('.item-4').text() === p1 && $('.item-7').text() === p1
			|| $('.item-2').text() === p1 && $('.item-5').text() === p1 && $('.item-8').text() === p1
			|| $('.item-3').text() === p1 && $('.item-8').text() === p1 && $('.item-9').text() === p1
			|| $('.item-1').text() === p1 && $('.item-5').text() === p1 && $('.item-9').text() === p1
			|| $('.item-3').text() === p1 && $('.item-5').text() === p1 && $('.item-7').text() === p1;
}

function xWinMadeit(p2) {
	return $('.item-1').text() === p2 && $('.item-2').text() === p2 && $('.item-3').text() === p2
			|| $('.item-4').text() === p2 && $('.item-5').text() === p2 && $('.item-6').text() === p2
			|| $('.item-7').text() === p2 && $('.item-8').text() === p2 && $('.item-9').text() === p2
			|| $('.item-1').text() === p2 && $('.item-4').text() === p2 && $('.item-7').text() === p2
			|| $('.item-2').text() === p2 && $('.item-5').text() === p2 && $('.item-8').text() === p2
			|| $('.item-3').text() === p2 && $('.item-8').text() === p2 && $('.item-9').text() === p2
			|| $('.item-1').text() === p2 && $('.item-5').text() === p2 && $('.item-9').text() === p2
			|| $('.item-3').text() === p2 && $('.item-5').text() === p2 && $('.item-7').text() === p2;
}

function displayBoard(){
	$('.item').text('').removeClass('disabled');
	$('.winner-announcement').html('')
	$('.board').show();
	count = 0;
}