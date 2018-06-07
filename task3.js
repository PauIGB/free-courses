var t1 = +process.argv[2];
var t2 = +process.argv[3];
function decNum (n, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[ (n%100>4 && n%100<20)? 2 : cases[(n%10<5)?n%10:5] ];
}
if (1 <= t1 && t2 <= 100000) {
  var t = t1 + t2;
  var s = t % 60;
  var m = parseInt(t / 60);
  var arr = [];
  if (60 <= m) {
    var h = parseInt(t / 3600);
    m = m - 60 * h;
    arr.push(h + " " + decNum(h, ['час', 'часа', 'часов']));
  }
  if (m > 0)
  {
    arr.push(m + " " + decNum(m, ['минута', 'минуты', 'минут']));
  }
  if (s > 0)
  {
    arr.push(s + " " + decNum(s, ['секунда', 'секунды', 'секунд']));
  }
  process.stdout.write(arr.join(" ") + '\n');
}