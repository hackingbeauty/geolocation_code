(function(){

	if(!window.JS) {window.JS = {}}	//Create Namespace
	
	JS.Geolocation = {
	  init: function(){
	    if (geo_position_js.init()) {
        geo_position_js.getCurrentPosition(this.geo_success, this.geo_error);
      } else {
        alert("funcionality not available");
      }
	  },
	  geo_success : function(){
      alert("Found you at latitude " + p.coords.latitude + ", longitude " + p.coords.longitude);
	  },
	  geo_error : function(position){
	    alert("Could not find you!");
	  }
	}
		
})();
		
$(document).ready(function(){
 // JS.Geolocation.init();  
  
  // Build the URL to query
  var url = "http://iplocationtools.com/ip_query.php?output=json&ip=80.80.214.93";

  

  // Utilize the JSONP API
  $.getJSON(url, function(data){
      if(data['status'] == 'ok'){
          // Do something with the data
          $('#profile #ip')
              .append(data['IP']);
          $('#profile #country')
              .append(data['CountryName']);
      }
  });  
  
});

