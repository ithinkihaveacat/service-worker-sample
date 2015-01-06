self.addEventListener('fetch', function (event) {

  var request = event.request;
  var response = fetch(request);
  
  event.respondWith(response);
  
  response.then(function (obj) {
    obj.clone();
  });
  
});

self.addEventListener('install', function (event) {
  console.log('INSTALL');
});

self.addEventListener('activate', function (event) {
  console.log('ACTIVATE');
});
