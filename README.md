# YouTubeCaption
Based on TechLead's youtube caption project [https://www.youtube.com/watch?v=r7SO-Oq3d5E&t=1350s]. 

Transcribes YouTube videos in a new tab when YouTube transcriptions are available.

Intall bookmarklet. (See installation instructions below.)

To use, navigate to a YouTube page and turn on captions and/or refresh the page. Then click the bookmarklet you installed and you'll see the text transcribed on a new tab.


## INSTALLATION

Create a bookmark in your favorite browser (or at least Chrome). 

In the URL field, copy the following code (as found in index.js also)

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


