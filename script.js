

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
			!xWinMadeit() && !oWinMadeit() && 
			$('.winner-announcement').html('There is a tie. Start a new game.');
			count = 0;
		} else if( item.hasClass('disabled') ) {
			alert('disabled!');
		} else if (count % 2 === 0){
			count++;
			item.addClass(' disabled').text('x');
			if(xWinMadeit()) {
				$('.winner-announcement').html($('#player-1').val() + ' wins');
			};
		} else {
			count++;	
			item.addClass(' disabled').text('o');
			if(oWinMadeit()) { 
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

function oWinMadeit() {
	return 	   $('.item-1').text() === 'o' && $('.item-2').text() === 'o' && $('.item-3').text() === 'o'
			|| $('.item-4').text() === 'o' && $('.item-5').text() === 'o' && $('.item-6').text() === 'o'
			|| $('.item-7').text() === 'o' && $('.item-8').text() === 'o' && $('.item-9').text() === 'o'
			|| $('.item-1').text() === 'o' && $('.item-4').text() === 'o' && $('.item-7').text() === 'o'
			|| $('.item-2').text() === 'o' && $('.item-5').text() === 'o' && $('.item-8').text() === 'o'
			|| $('.item-3').text() === 'o' && $('.item-6').text() === 'o' && $('.item-9').text() === 'o'
			|| $('.item-1').text() === 'o' && $('.item-5').text() === 'o' && $('.item-9').text() === 'o'
			|| $('.item-3').text() === 'o' && $('.item-5').text() === 'o' && $('.item-7').text() === 'o';
}

function xWinMadeit() {
	return 	   $('.item-1').text() === 'x' && $('.item-2').text() === 'x' && $('.item-3').text() === 'x'
			|| $('.item-4').text() === 'x' && $('.item-5').text() === 'x' && $('.item-6').text() === 'x'
			|| $('.item-7').text() === 'x' && $('.item-8').text() === 'x' && $('.item-9').text() === 'x'
			|| $('.item-1').text() === 'x' && $('.item-4').text() === 'x' && $('.item-7').text() === 'x'
			|| $('.item-2').text() === 'x' && $('.item-5').text() === 'x' && $('.item-8').text() === 'x'
			|| $('.item-3').text() === 'x' && $('.item-6').text() === 'x' && $('.item-9').text() === 'x'
			|| $('.item-1').text() === 'x' && $('.item-5').text() === 'x' && $('.item-9').text() === 'x'
			|| $('.item-3').text() === 'x' && $('.item-5').text() === 'x' && $('.item-7').text() === 'x';
}

function displayBoard(){
	$('.item').text('').removeClass('disabled');
	$('.winner-announcement').html('')
	$('.board').show();
	count = 0;
}