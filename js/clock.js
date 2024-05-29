function updateClock()
{
	var now = new Date();
	var hours = String(now.getHours()).padStart(2,'0');
	var minutes = String(now.getMinutes()).padStart(2,'0');
	var seconds = String(now.getSeconds()).padStart(2,'0');
	var dayOfWeek =['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
	var datetimeString = `${hours}:${minutes}:${seconds}`;
	document.getElementById('time').textContent = datetimeString;
	document.getElementById('year').textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
	document.getElementById('week').textContent = dayOfWeek[now.getDay()];
}

updateClock();

setInterval(updateClock, 1000);