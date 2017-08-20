if (typeof jQuery == 'undefined') {
	console.log("jQuery load");
} else
	console.log("jQuery no load");


var LastNumberOfThreads = 5; //Numer ostatniego wprowadzonego tematu


var imageSlider = [
	"../Threads/"+(LastNumberOfThreads-4)+".jpg",
	"../Threads/"+(LastNumberOfThreads-3)+".jpg",
	"../Threads/"+(LastNumberOfThreads-2)+".jpg",
	"../Threads/"+(LastNumberOfThreads-1)+".jpg",
	"../Threads/"+(LastNumberOfThreads-0)+".jpg",
]

function ReadImage()
{
for(var i=imageSlider.length; i>=1; i--){
	
	var newImg 	= document.createElement("img");
	newImg.setAttribute("src", "../Threads/"+ i +".jpg");
	
	if(i<imageSlider.length)
		newImg.setAttribute("class", "imageSliderHidden");
	else newImg.setAttribute("class", "imageSlider");
	
	document.getElementById("imageSlider").appendChild(newImg);
	
	console.log(i);
	console.log(imageSlider[i-1]);
}
}

console.log($("#imageSlider").length);



var imagecount = imageSlider.length-1;
console.log("imagecount: " + imagecount);
var timer1=2000;



//Ręczne przełączanie slajdu
function slide(x)
{	
	var selectImage = document.getElementById("imageSlider").getElementsByTagName("img");
	hideSlide();
	selectImage[imagecount].className = "imageSliderHidden";
	imagecount = imagecount+x;
	if(imagecount > imageSlider.length-1)
	{
		imagecount = 0;
    }
    if(imagecount < 0)
    {
    	imagecount = imageSlider.length-1;
    }
    selectImage[imagecount].className="imageSlider";
    showSlide();
    console.log(imagecount);
    
}

function hideSlide()
{
	$("#imageSlider").fadeOut(1500);
}

function showSlide()
{
	$("#imageSlider").fadeIn(1500);
	
}
/*
//Automatyczne przełączanie slajdu
window.setInterval(function slideA()
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
    
    //hideSlide();
    //document.getElementById('imageSlider').style.display="none";
    //document.getElementById('imageSlider').src=imageSlider[imagecount];
    //document.getElementById('imageSlider').style.display="block";
    //showSlide();
    
	
},5000)
*/



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
