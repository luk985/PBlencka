if (typeof jQuery == 'undefined') {
	console.log("jQuery load");
} else
	console.log("jQuery no load");


var LastNumberOfThreads = 5; //Numer ostatniego wprowadzonego tematu
var timeChangeSlide = 600;


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



var imagecount = 0;
console.log("imagecount: " + imagecount);
var timer1=2000;



//Ręczne przełączanie slajdu
function slide(x)
{	
	var selectImage = document.getElementById("imageSlider").getElementsByTagName("img");
	//hideSlide();
	$("#imageSlider").fadeOut(timeChangeSlide,function(){
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
	    $("#imageSlider").fadeIn(timeChangeSlide);
	});
}

//Automatyczne przełączanie slajdu
window.setInterval(function slideA()
{	
	var selectImage = document.getElementById("imageSlider").getElementsByTagName("img");
	$("#imageSlider").fadeOut(timeChangeSlide,function(){
		selectImage[imagecount].className = "imageSliderHidden";
		imagecount++;
		if(imagecount > imageSlider.length-1)
		{
			imagecount = 0;
	    }
	    if(imagecount < 0)
	    {
	    	imagecount = imageSlider.length-1;
	    }
	    selectImage[imagecount].className="imageSlider";
	    $("#imageSlider").fadeIn(timeChangeSlide);
	});
},10000)

function ReadText(){
	console.log("../Threads/" + imageSlider.length +".txt");
	//var TextBlog = loadStrings("../Threads/" + imageSlider.length +".txt");
	jQuery.get('5.txt', function(txt){
		$('TextBlog').children('p').text(text);
	});
	//document.getElementById("TextBlog").getElementsByTagName("p").innetHtlm = TextBlog;
	
}


