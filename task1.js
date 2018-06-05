var i = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];
if (b <= 36 && 2 <= a) {
  i = parseInt(i, a);
  if (0 <= i && i <= 10000) {
    process.stdout.write(i.toString(b).toLowerCase() + '\n');
  }
}
