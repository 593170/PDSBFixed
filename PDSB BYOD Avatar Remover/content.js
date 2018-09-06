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

var randomNumber = Math.floor(Math.random() * 4); // <-- number should be one higher than the amount of phrases
console.log("List selection: " + randomNumber);

if (randomNumber == 0) {
	text1.innerHTML = "Sadly, 6ix9ine will never be advertised on a skittles commercial";
} else if (randomNumber == 1) {
	text1.innerHTML = "Minecraft players complaning about Fortnite players is ironic";
} else if (randomNumber == 2) {
	text1.innerHTML = "Furries! Furries everywhere! It's like a zoo but with failure!";
} else if (randomNumber == 3) {
	text1.innerHTML = "Thanos Car";
	text2.innerHTML = "Thanos Car";
} 


} else {
	goto (1);
}
