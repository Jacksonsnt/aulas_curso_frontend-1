function media(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var c = parseFloat(document.getElementById('valor03').value);
  

  if ( a>b && a>c) {

    document.getElementById('demo').innerHTML = a.toString() + " (O maior numero)";
  }
    if ( b>a && b>c) {

      document.getElementById('demo').innerHTML = b.toString() + " (O maior numero)";
    }
    if ( c>b && c>a) {

        document.getElementById('demo').innerHTML = c.toString() + " (O maior numero)";
    }

}