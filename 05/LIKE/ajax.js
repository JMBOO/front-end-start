function load(){

  var script = document.createElement('script');
  var head = document.getElementsByTagName("head")[0];

  script.type = 'text/javascript';
  // script.src = 'hello.js';
  script.src = 'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=dummyFunc';


  head.appendChild(script);

}


function dummyFunc(data){

  var likeCount = data[0].like_count;
  document.getElementById('count').innerHTML = likeCount;

}

load();