//FINISHED PRODUCT-- FOR NOW
javascript: (function () 
{
  var regexp = new RegExp(/playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/);
  var packet = regexp.exec(document.body.innerHTML);
  if (packet)
  {
    var url = packet[1];
    url = url.replace(/\\u0026/g, "&");
    url = "https://www." + url;
    window.open(url);
    var data = document.getElementsByTagName('transcript')
  }
  else { alert("Navigate to a Youtube page, turn on CC and/or refresh page") };
})();


//SAVED AS JSON FORMAT INSTEAD- FOR MANIPULATION
javascript: (function () 
{
  var regexp = new RegExp(/playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/);
  var packet = regexp.exec(document.body.innerHTML);
  if (packet)
  {
    var url = packet[1];
    url = url.replace(/\\u0026/g, "&");
    url = "https://www." + url + "&fmt=json3";
    window.open(url);
    var data = document.getElementsByTagName('transcript')
  }
  else { alert("Navigate to a Youtube page and turn on CC") };
})();