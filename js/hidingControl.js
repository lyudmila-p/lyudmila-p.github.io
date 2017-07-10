window.onload=function()
{
	$('div:eq(3)').hide(); $('div:eq(4)').hide();
	$('div:eq(5)').hide(); $('div:eq(9)').hide();
	$('div:eq(10)').hide(); $('div:eq(11)').hide();
	$('div:eq(0)').click(function()
	{
		$('div:eq(3)').slideToggle(1000,'linear')
	});
	$('div:eq(1)').click(function()
	{
		$('div:eq(4)').slideToggle(1000,'linear')
	});
	$('div:eq(2)').click(function()
	{
		$('div:eq(5)').slideToggle(1000,'linear')
	});
	$('div:eq(6)').click(function()
	{
		$('div:eq(9)').slideToggle(1000,'linear')
	});
	$('div:eq(7)').click(function()
	{
		$('div:eq(10)').slideToggle(1000,'linear')
	});
	$('div:eq(8)').click(function()
	{
		$('div:eq(11)').slideToggle(1000,'linear')
	});
}