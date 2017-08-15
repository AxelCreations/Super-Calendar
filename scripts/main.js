$(function(){
	$('#calendar-section').fullCalendar({
		firstDay: 1,
		aspectRatio: 1.3,
		dragScroll: false,
		header: {
			left: 'prev',
			center: 'title',
			right: 'next'
		},
		monthNames: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
		dayNamesShort: ['D','L','M','M','J','V','S'],
		dayRender: function(date, cell) {
			if (date.format('YYYY-M-DD') == '2017-8-10') {
				cell.addClass('with-event');
			}
		},
	});
});