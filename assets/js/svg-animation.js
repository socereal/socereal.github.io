$(document).ready(function () {
  var bearPaw = Snap("#bear-paw-left");
  if (bearPaw) {
    let duration = 5000;
    var rotatePaw = function () {
      Snap.animate(-20, 20, function (val) {
        bearPaw.transform("r" + [val, 340, 400]);
      }, duration/2);
      setTimeout(function(){
        Snap.animate(20, -20, function (val) {
          bearPaw.transform("r" + [val, 340, 400]);
        }, duration/2);
      },duration/2);
    };
    rotatePaw();
    setInterval(rotatePaw, duration);
  }

  var sun = Snap("#sun");
  if (sun) {
    let duration = 8000;
    var rotateSun = function () {
      Snap.animate(0, 360, function (val) {
        sun.transform("r" + [val, 1600, 230]);
      }, duration);
    };
    rotateSun();
    setInterval(rotateSun, duration);
  }

  var cloud = Snap("#cloud");
  if (cloud) {
    let duration = 10000;
    let bounds = cloud.getBBox();
    var rotateCloud = function () {
      Snap.animate(0, 20, function (val) {
        cloud.transform("r" + [val, 150, 300] + "s" + ((val / 20.0)*0.3 + 1));
      }, duration/2);
      setTimeout(function(){
        Snap.animate(20, 0, function (val) {
          cloud.transform("r" + [val, 150, 300] + "s" + ((val / 20.0)*0.3 + 1));
        }, duration/2);
      },duration/2);
    };
    rotateCloud();
    setInterval(rotateCloud, duration);
  }
});
