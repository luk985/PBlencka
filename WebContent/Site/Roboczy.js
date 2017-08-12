var numberOfFiles=1;
var endOfFile=0;
var numberSlideToShow = 5; //Ilość slajdów do wyświetlenia
var LastNumberOfThreads = 5; //Numer ostatniego wprowadzonego tematu



console.log(imagecount); //Wyświetlenia tekstu w consoli

/*
do{ 
	
	var myFileThreads = new File("../Threads/" + numberOfFiles + 1 + ".jpg");
	
	if (myFileThreads==true){
		numberOfFiles++;
		console.log("numberOfFiles:" + numberOfFiles);
	} else {
		endOfFile=1;
		alert("File not found " + numberOfFiles);
		console.log("numberOfFiles:" + numberOfFiles);
	}
	
} while(endOfFile=0);
*/

/*

do{ 
	
	var myFileThreads = new File("../Threads/" + numberOfFiles+1 + ".jpg");
	
	if (myFileThreads.isFile()){
		numberOfFiles++;
		console.log("numberOfFiles:" + numberOfFiles);
	} else {
		endOfFile=1;
		alert("File not found " + numberOfFiles);
		console.log("numberOfFiles:" + numberOfFiles);
	}
	
} while(endOfFile=0);
console.log("numberOfFiles:" + numberOfFiles);
console.log("endOfFile:" + endOfFile);

*/
	
	/*
	$.ajax({
		type: 'GET',
		url: "../Threads/1.jpg",
		//url: "../Threads/" + numberOfFiles+1 + ".jpg",
		success:function(){
			alert("Number file:" + numberOfFiles);
			numberOfFiles++;
		},
		error:function(){
			endOfFile=1;
			alert("File not found " + numberOfFiles);
		}
	}) 
	*/
	
	
	
	
	/*
	if(myobject.FileExists("../Threads/1.jpg"))
	//if(myobject.FileExists("../Threads/" + numberOfFiles+1 + ".jpg"))
	{
		alert("Number file:" + numberOfFiles);
		numberOfFiles++;
	} else {
		endOfFile=1;
		alert("File not found");
		}
	*/
	
for (i=1; i++; )
	
	
var imageSlider = [
	"../Threads/1.jpg",
	"../Threads/2.jpg",
	"../Threads/3.jpg",
	"../Threads/4.jpg",
	"../Threads/5.jpg"
]

document.getElementById('imageSlider1').src=imageSlider[imagecount];
document.getElementById('imageSlider1').src=imageSlider[imagecount];


imageSlider.onload = function() {
	alert("image is loaded");
}

var imagecount = 0;
var total = imageSlider.length-1;
var timer1=2000;



//Ręczne przełączanie slajdu
function slide(x)
{	
	
	imagecount = imagecount+x;
	if(imagecount > total)
	{
		imagecount = 0;
    }
    if(imagecount < 0)
    {
    	imagecount = total;
    }
    hideSlide();
    document.getElementById('imageSlider').style.display="none";
    document.getElementById('imageSlider').src=imageSlider[imagecount];
    document.getElementById('imageSlider').style.display="block";
    showSlide();
}
  
//Automatyczne przełączanie slajdu
window.setInterval(function slideA(x)
{
	imagecount = imagecount+1;
	if(imagecount > total)
	{
		imagecount = 0;
    }
    if(imagecount < 0)
    {
    	imagecount = total;
    }
    
    hideSlide();
    document.getElementById('imageSlider').style.display="none";
    document.getElementById('imageSlider').src=imageSlider[imagecount];
    document.getElementById('imageSlider').style.display="block";
    showSlide();
    
	
},5000)




/*
window.setInterval(function slideA(x)
{
	
    imagecount = imagecount+1;
    if(imagecount > total)
    {
    	imagecount = 1;
    }
    if(imagecount < 1)
    {
    	imagecount = 5;
    }
    //var fileImagePatch = "<img src =\" ../Threads/" + imagecount + ".jpg\"/>";
    
    document.getElementById('imageSlider').innerHTML = imageSlider2;
    
    
    },3000);
	
*/
function hideSlide()
{
	$("#imageSlider").fadeOut(1500);
}

function showSlide()
{
	$("#imageSlider").fadeIn(1500);
	
}