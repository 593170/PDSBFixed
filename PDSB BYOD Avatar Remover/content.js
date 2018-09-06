
var url = window.location.href;

if (url = "https://byod.peelschools.org/") {

var element = document.getElementById("Avatar").children;
var namef = document.getElementsByClassName("n-f");
var namel = document.getElementsByClassName("n-l");
var text1 = document.getElementById("G1");
var text2 = document.getElementById("G2");
namef[0].innerHTML = "Follow on IG";
namel[0].innerHTML = "@pdsbfixed"
element[0].style.backgroundImage = "url('https://github.com/593170/PDSBFixed/blob/master/pdsbfixed.png?raw=true')";
element[0].style.backgroundColor = "white";

var randomNumber = Math.floor(Math.random() * 13); // <-- number should be one higher than the amount of phrases
//var randomNumber = 12
	console.log("List selection: " + randomNumber);

if (randomNumber == 0) {
	text1.innerHTML = "Sadly, 6ix9ine will never be advertised on a skittles commercial";
	text2.innerHTML = "";
} else if (randomNumber == 1) {
	text1.innerHTML = "Minecraft players complaning about Fortnite players is ironic";
	text2.innerHTML = "";
} else if (randomNumber == 2) {
	text1.innerHTML = "Furries! Furries everywhere! It's like a zoo but with failure!";
	text2.innerHTML = "";
} else if (randomNumber == 3) {
	text1.innerHTML = "Thanos Car";
	text2.innerHTML = "Thanos Car";
} else if (randomNumber == 4) {
	text1.innerHTML = "Peenit Bubter";
	text2.innerHTML = "";
} else if (randomNumber == 5) {
	text1.innerHTML = "Ghost busters whaddya want?";
	text2.innerHTML = "";
} else if (randomNumber == 6) {
	text1.innerHTML = "Do you play fork knife?";
	text2.innerHTML = "";
} else if (randomNumber == 7) {
	text1.innerHTML = "*Drops down* Hello there";
	text2.innerHTML = "";
} else if (randomNumber == 8) {
	text1.innerHTML = "Good morning Vietnam!";
	text2.innerHTML = "";
} else if (randomNumber == 9) {
	text1.innerHTML = "It's showtime!";
	text2.innerHTML = "";
} else if (randomNumber == 10) {
	text1.innerHTML = "\"Live life, do school\" - Albert Hitler";
	text2.innerHTML = "";
} else if (randomNumber == 11) {
	text1.innerHTML = "Pepe is the name, depression is my game.";
	text2.innerHTML = "";
} else if (randomNumber == 12) {
	element[0].style.backgroundImage = "url('https://classroomclipart.com/images/gallery/Clipart/Animals/Frog_Clipart/TN_31-12-10-S_05A.jpg')";
	text1.innerHTML = "graphic design is my passion";
	text1.style.color = "red";
	text1.style.fontFamily = "Papyrus";
	text2.innerHTML = "";


} else {
	goto (1);
}


} 
