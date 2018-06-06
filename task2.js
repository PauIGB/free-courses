var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];
var arr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
m = arr.indexOf(m);
if ((1 <= d && d <= 31) && (1 <= y && y <= 2999) && m in arr) {
  var a = new Date(y, 11, 31) - new Date(y, m, d);
  process.stdout.write(a / (60 * 1000 * 60 * 24) + '\n');
}
