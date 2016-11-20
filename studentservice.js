myApp.service("studentservice", function($http){

	return {
		
		getStudents:function(){
			
			return $http.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true")
		}
	}
	
	
})