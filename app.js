var myApp=angular.module('myApp', [])
myApp.controller("mainController",function ($scope){
	$scope.showFullList = true;
	$scope.index
	
	$scope.students=[
    {
        "fname": "Constance",
        "lname": "Barden",
        "tel": "(939)259-0554",
        "address": "1172 Id Dr",
        "city": "Littleton",
        "state": "MO",
        "zip": 54362
    },
    {
        "fname": "Wan-Yu",
        "lname": "Leon",
        "tel": "(531)072-3221",
        "address": "9247 Lacus Ct",
        "city": "Meridianville",
        "state": "CT",
        "zip": 94193
    },
    {
        "fname": "Stacey",
        "lname": "Krout",
        "tel": "(340)799-1029",
        "address": "6489 Nec Dr",
        "city": "Kearney",
        "state": "HI",
        "zip": 25279
    },
    {
        "fname": "Ning",
        "lname": "Levy",
        "tel": "(381)700-5472",
        "address": "1588 Nunc Rd",
        "city": "State College",
        "state": "IL",
        "zip": 85817
    },
    {
        "fname": "Emir",
        "lname": "Dabbs",
        "tel": "(449)756-4163",
        "address": "8937 Mattis Dr",
        "city": "Columbia",
        "state": "MI",
        "zip": 67747
    },
    {
        "fname": "Bern",
        "lname": "Ahn",
        "tel": "(251)471-3419",
        "address": "4528 Vel Dr",
        "city": "Cullman",
        "state": "MD",
        "zip": 73729
    },
    {
        "fname": "Samir",
        "lname": "Schaffer",
        "tel": "(813)573-9626",
        "address": "1164 Tellus Rd",
        "city": "Brooklyn",
        "state": "CT",
        "zip": 26949
    },
    {
        "fname": "Emiliano",
        "lname": "Yach",
        "tel": "(504)122-2254",
        "address": "2086 Amet Ln",
        "city": "Palm Beach Gardens",
        "state": "MA",
        "zip": 68941
    },
    {
        "fname": "Ira",
        "lname": "Osborne",
        "tel": "(630)532-5348",
        "address": "5855 Amet St",
        "city": "Small Town Girl",
        "state": "NE",
        "zip": 22895
    },
    {
        "fname": "Jacqueline",
        "lname": "Sherstan",
        "tel": "(422)489-2335",
        "address": "3480 Tincidunt Ct",
        "city": "Midlothian",
        "state": "LA",
        "zip": 49869
    }
]
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
	resetModelValues()
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

	$scope.newstudent.fname = ""
	$scope.newstudent.lname = ""
	$scope.newstudent.tel = ""
	$scope.newstudent.address = ""
	$scope.newstudent.city = ""
	$scope.newstudent.state = ""
	$scope.newstudent.zip = ""
		
	$scope.nFname = ""
	$scope.nLname = ""
	$scope.nTelephone = ""
	$scope.nCity = ""
	$scope.nState = ""
	$scope.nLname = ""
	$scope.nZipCode =""
						
			

}
})
