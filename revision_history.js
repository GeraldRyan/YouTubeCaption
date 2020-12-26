//FINISHED PRODUCT-- FOR NOW
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




 // works mostly but 404 not found error. Next step stringify url
javascript: (function () 
{
  alert("Hi");
  var regexp = new RegExp(/playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/);
  alert(regexp);
  var packet = regexp.exec(document.body.innerHTML);
  if (packet)
  {
    var url = packet[1];
    alert(url);
    window.open(url);
  }
  else { alert("Navigate to a Youtube page and turn on CC") };
})();



javascript: (function ()
{
  alert("Hi");
  var url = window.location.href;
  window.open(url)
})(); // works


javascript: (function () { alert("Hi"); var url = window.location.href; window.open(url) })(); // works

javascript: (function () { alert("Hi"); var url = "http://www.amazon.com"; window.open(url) })(); // works

javascript: (function () { alert("Hi"); window.open("https://www.amazon.com") })(); //works

javascript: (function () { alert("Hi") })(); //works