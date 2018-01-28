var fs = require('fs');
var colors = require('colors');
/* statystyki obrazka
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString());
});
*/

/* odczyt + zapis + odczyt
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
  console.log('Dane przed zapisem!'.blue);
  console.log(data);
  fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
    if (err) throw err; //jeśli pojawi się błąd, wyrzuć wątek
    console.log('Zapisano!'.blue);
    fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
      console.log('Dane po zapisie'.blue);
      console.log(data);
    });
  });
});
*/

fs.readdir('./folder/', 'utf-8', function(err, files){
  //console.log(files);
  var pliki = files.join();
  console.log('Odczytuje pliki: '.red)
  console.log(pliki);
  fs.writeFile('./pliki.txt', pliki, function(err){
    if (err) throw err; 
    console.log('Zapisuje pliki do pliki.txt'.red);
    fs.readFile('./pliki.txt', 'utf-8', function(err, data) {
      console.log('Zawartość mojego nowego pliku: '.red);
      console.log(data);
    });
  });
});