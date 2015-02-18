function doIt(){
  console.log("Bing Bong");
};

setInterval(doIt, 2000);

(function ringBell(){
  var msg = "Ding Dong";

  function doIt(){
    console.log(msg);
  };
  // setTimeout(doIt, 1000);
  setInterval(doIt, 1000);

})();
