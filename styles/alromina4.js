let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick = () =>{ 
		document.getElementById("zapoln").style.display = "none";
		document.getElementById("pokaz").style.display = "block";
		listVideo.forEach(vid => vid.classList.remove('active'));
		video.classList.add('active');
		if(video.classList.contains('active')){
			let src = video.children[0].getAttribute('src');
			mainVideo.src = src;
			let text = video.children[1].innerHTML;
			title.innerHTML	= text;
		};
	};
});

function ubrat(){
	document.getElementById("pokaz").style.display = "none";
	document.getElementById("zapoln").style.display = "block";
}
function vernut(){
	document.getElementById("pokaz").style.display = "block";
	document.getElementById("zapoln").style.display = "none";
}

var a;
function mychfont()
{
if(a==1) { document.getElementById("zapoln").style.fontFamily = "Cooljazz"; 
return a=0; }
else{ document.getElementById("zapoln").style.fontFamily = "ArabiaCyr"; 
return a=1; }
}

var a1;
function mychfont1()
{
if(a1==1) { document.getElementById("myNav1").style.fontFamily = "KarnacOne"; 
return a1=0; }
else{ document.getElementById("myNav1").style.fontFamily = "Modestina"; 
return a1=1; }
}

var a2;
function mychfont2()
{
if(a2==1) { document.getElementById("myNav2").style.fontFamily = "Rosalinda"; 
return a2=0; }
else{ document.getElementById("myNav2").style.fontFamily = "ModernoDcFr"; 
return a2=1; }
}

var a3;
function mychfont3()
{
if(a3==1) { document.getElementById("myNav3").style.fontFamily = "Busorama"; 
return a3=0; }
else{ document.getElementById("myNav3").style.fontFamily = "Brushie"; 
return a3=1; }
}

var a4;
function mychfont4()
{
if(a4==1) { document.getElementById("myNav4").style.fontFamily = "Exo2Light"; 
return a4=0; }
else{ document.getElementById("myNav4").style.fontFamily = "AuXDotBitCCond"; 
return a4=1; }
}

