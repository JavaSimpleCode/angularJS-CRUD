var myApp=angular.module('myApp', [])
myApp.controller("mainController", function ($scope, studentservice){
	$scope.showFullList = true;
	
	studentservice.getStudents().success(function(data){
		$scope.students = data
	})
	
	
	$scope.editStudent=function (std,index){
	$scope.showEdit = true;
	$scope.showFullList = false
	
    $scope.index = index
	$scope.selectedperson = $scope.students[index]
	$scope.fname = $scope.selectedperson.fname
	$scope.lname = $scope.selectedperson.lname
	$scope.tel = $scope.selectedperson.tel
	$scope.address = $scope.selectedperson.address
	$scope.city = $scope.selectedperson.city
	$scope.state= $scope.selectedperson.state
	$scope.zip = $scope.selectedperson.zip
	
}

$scope.deleteStudent=function(index){
	var newlist = $scope.students
	newlist.splice(index, 1)
	$scope.students = newlist
	console.log(index)
}

$scope.updateStudent = function (){
	$scope.showEdit = false;
	$scope.showFullList = true;
	$scope.newstudent={}
	$scope.newstudent.fname = $scope.fname
	$scope.newstudent.lname = $scope.lname
	$scope.newstudent.tel = $scope.tel;
	$scope.newstudent.address = $scope.address;
	$scope.newstudent.city = $scope.city;
	$scope.newstudent.state = $scope.state;
	$scope.newstudent.zip = $scope.zip;
	
	$scope.students[$scope.index] = $scope.newstudent
	
	$scope.newstudent={}
	
}
$scope.addStudent=function(){
	$scope.resetModelValues()
	$scope.showAddScreen = true;
	$scope.showFullList = false;
	$scope.showEdit = false;
}

$scope.addNewStudentRecord=function(){
	
	$scope.newstudent={}

	$scope.newstudent.fname = $scope.nFname
	$scope.newstudent.lname = $scope.nLname
	$scope.newstudent.tel = $scope.nTelephone;
	$scope.newstudent.address = $scope.nAddress;
	$scope.newstudent.city = $scope.nCity;
	$scope.newstudent.state = $scope.nState;
	$scope.newstudent.zip = $scope.nZipCode;
	var length = $scope.students.length
	$scope.students[length] = $scope.newstudent 
	
	
	$scope.showAddScreen = false;
	$scope.showFullList = true;
	$scope.showEdit = false;
}

$scope.cancelAddingNewRecord=function(){
	

	$scope.showAddScreen = false;
	$scope.showFullList = true;
	$scope.showEdit = false;	
}

$scope.resetModelValues=function(){


	$scope.nFname = ""
	$scope.nLname = ""
	$scope.nTelephone = ""
	$scope.nCity = ""
	$scope.nState = ""
	$scope.nLname = ""
		$scope.address = ""
	$scope.nZipCode =""
						
			

}
})
