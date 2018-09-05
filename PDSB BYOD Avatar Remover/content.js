var url = window.location.href;

if (url = "https://byod.peelschools.org/") {

var element = document.getElementById("Avatar").children;
var namef = document.getElementsByClassName("n-f");
var namel = document.getElementsByClassName("n-l");
namef[0].innerHTML = "Follow on IG";
namel[0].innerHTML = "@pdsbfixed"
element[0].style.backgroundImage = "url('https://github.com/593170/PDSBFixed/blob/master/pdsbfixed.png?raw=true')";
element[0].style.backgroundColor = "transparent";


} else {
	goto (1);
}
