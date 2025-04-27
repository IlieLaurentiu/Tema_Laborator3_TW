var iphone= $('#iphone');
var camera= $('#camera');

var layer= $('#main');

layer.mousemove(function(e){
  var ivalueX= (e.pageX * -1 / 30);
  var ivalueY= (e.pageY * -1 / 30);
  var cvalueX= (e.pageX * -1 / 40);
  var cvalueY= (e.pageY * -1 / 60);
  console.log('ok');
  iphone.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  camera.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
});