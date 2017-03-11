// (1) Load the jquery library into index.html BEFORE app.js
// (2) $.getJSON(«url»)
// (3) write the request-handler function in 

//----------------
// Async Request: Promise  
//----------------
 
// (ajax request)																			//(Step 3)
$.getJSON("http://swapi.co/api/people/?format=json&search=darth").then(function(serverRes){
	  //promise handler
     console.log(serverRes)
	  document.querySelector('#app-container').innerHTML = '<h2> <mark>' + serverRes.results[0].name + '</mark> </h2>'

})

//note: congress api requires JSONP (handled in jquery w/ the callback=?)
$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(dataFromServer){
   console.log(dataFromServer)
})