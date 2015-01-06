self.addEventListener('fetch', function (event) {

  var request = event.request;
  var response = fetch(request);
  
  // responseWith second (ok)
  
  response.then(function (obj) {
    obj.clone();
  });
  
  event.respondWith(response);  
  
});

self.addEventListener('install', function (event) {
  console.log('INSTALL');
});

self.addEventListener('activate', function (event) {
  console.log('ACTIVATE');
});
