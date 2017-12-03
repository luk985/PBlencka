if (typeof jQuery == 'undefined') {
	console.log("jQuery no load");
} else
	console.log("jQuery load");


var LastNumberOfThreads = 6; //Numer ostatniego wprowadzonego tematu
var timeChangeSlide = 600;
var LoadTopic = 5; //Ilość wczytywanych tematów
var HeadingTopic = [5];


var imageSlider = [
	"../Threads/"+(LastNumberOfThreads-4)+".jpg",
	"../Threads/"+(LastNumberOfThreads-3)+".jpg",
	"../Threads/"+(LastNumberOfThreads-2)+".jpg",
	"../Threads/"+(LastNumberOfThreads-1)+".jpg",
	"../Threads/"+(LastNumberOfThreads-0)+".jpg",
]

//Ładowanie obrazów do pokazów slajdów
function ReadImage()
{
	for(var i=imageSlider.length; i>=0; i--){
		
		var newImg 	= document.createElement("img");
		newImg.setAttribute("src", "../Threads/"+ (LastNumberOfThreads-i) +".jpg");
		
		if(i<imageSlider.length)
			newImg.setAttribute("class", "imageSliderHidden");
		else newImg.setAttribute("class", "imageSlider");
		
		document.getElementById("imageSlider").appendChild(newImg);
		
		console.log(i);
		console.log(LastNumberOfThreads-i);
	}
	HeaddingTopic();
}

console.log($("#imageSlider").length);



var imagecount = 0;
console.log("imagecount: " + imagecount);
var timer1=2000;


//Wczytywanie nagłówka do pokazów slajdów
function HeaddingTopic()
{
	var AddHeaddingTopic = document.createElement("div");
	AddHeaddingTopic.setAttribute("id", "HeaddingTopicDiv");
	document.getElementById("imageSlider").appendChild(AddHeaddingTopic);
	
	for(var i=imageSlider.length; i>=0; i--)
	{
		var newHeading = document.createElement("a");
		newHeading.setAttribute("id", "HeaddingTopicText");
		newHeading.setAttribute("href", "../Threads/Topic" + (LastNumberOfThreads-i) + ".html");
		if(i<imageSlider.length)
			newHeading.setAttribute("class", "HeaddingTopicTextHidden");
		else newHeading.setAttribute("class", "HeaddingTopicText");
		
		document.getElementById("HeaddingTopicDiv").appendChild(newHeading);

		$("#HeaddingTopicDiv").children().eq(imageSlider.length-i).load("../Threads/Topic" + (LastNumberOfThreads-i) + ".html #Heading");
		

	}	
	
	document.getElementById("firstSlider").addEventListener("mouseover", OpacityNormal);
	document.getElementById("firstSlider").addEventListener("mouseout", Opacity4);
	
}

//Zmiana przejrzystości nagłówka
function OpacityNormal()
{
	$("#HeaddingTopicDiv").fadeTo(1500,0.8);
}

function Opacity4()
{
	$("#HeaddingTopicDiv").fadeTo(1500,0.3);
}


//Ręczne przełączanie slajdu
function slide(x)
{	
	var selectImage = document.getElementById("imageSlider").getElementsByTagName("img");
	var selectHeading = document.getElementById("HeaddingTopicDiv").getElementsByTagName("a");
	$("#imageSlider").fadeOut(timeChangeSlide,function(){
		selectImage[imagecount].className = "imageSliderHidden";
		selectHeading[imagecount].className = "HeaddingTopicTextHidden";
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
	    selectHeading[imagecount].className = "HeaddingTopicText";
	    $("#imageSlider").fadeIn(timeChangeSlide);
	});
}

//Automatyczne przełączanie slajdu
window.setInterval(function slideA()
{	
	var selectImage = document.getElementById("imageSlider").getElementsByTagName("img");
	var selectHeading = document.getElementById("HeaddingTopicDiv").getElementsByTagName("a");
	$("#imageSlider").fadeOut(timeChangeSlide,function(){
		selectImage[imagecount].className = "imageSliderHidden";
		selectHeading[imagecount].className = "HeaddingTopicTextHidden";
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
	    selectHeading[imagecount].className = "HeaddingTopicText";
	    $("#imageSlider").fadeIn(timeChangeSlide);
	    
	});
},10000)

//Wczytywania postów
function LoadingRecentPosts(){
	
	for (var i=LastNumberOfThreads; i>=(LastNumberOfThreads-LoadTopic); i--)
		{
		
		//Tworzenie kontenera tematu
		var newDiv = document.createElement("div");
		newDiv.setAttribute("id", "TextBlogTopic"+i);
		newDiv.setAttribute("class", "TextBlogTopic");
		document.getElementById("textBlog").appendChild(newDiv);
		
		var newDiv2 = document.createElement("div");
		newDiv2.setAttribute("id", "MainTopicImage"+i);
		newDiv2.setAttribute("class", "MainTopicImage");
		document.getElementById("TextBlogTopic"+i).appendChild(newDiv2);
		
		//Dodanie obrazka do tematu
		var newImg 	= document.createElement("img");
		newImg.setAttribute("src", "../Threads/"+ i +".jpg");
		newImg.setAttribute("class", "TopicImage");
		document.getElementById("MainTopicImage"+i).appendChild(newImg);
		
		//Dodanie tytułu tematu
		var newHeading = document.createElement("a");
		newHeading.setAttribute("id", "Heading"+i);
		newHeading.setAttribute("class", "Heading");
		//newHeading.addEventListener("mouseenter", function(){HighlightingTopic(this)});
		document.getElementById("TextBlogTopic"+i).appendChild(newHeading);
		$("#Heading"+i).load("../Threads/Topic" + i + ".html #Heading");
		
		//Dodanie daty tematu:
		var newDateTopic = document.createElement("p");
		newDateTopic.setAttribute("id", "DateTopic"+i);
		newDateTopic.setAttribute("class", "DateTopic");
		document.getElementById("TextBlogTopic"+i).appendChild(newDateTopic);
		$("#DateTopic"+i).load("../Threads/Topic" + i + ".html #DateTopic");
		
		//Dodanie linii
		var newLine = document.createElement("div");
		newLine.setAttribute("id", "Line");
		newLine.setAttribute("class", "Line");
		document.getElementById("TextBlogTopic"+i).appendChild(newLine);
		
		//Dodanie treści tematu:
		var newTopic = document.createElement("p");
		newTopic.setAttribute("id", "Topic"+i);
		newTopic.setAttribute("class", "Topic");
		document.getElementById("TextBlogTopic"+i).appendChild(newTopic);
		$("#Topic"+i).load("../Threads/Topic" + i + ".html #Topic");		
		
		}
}	

function HighlightingTopic(x){
	//x.style.fontsize = "50px";
	document.getElementById("Heading").style.fontsize= "50px";
	console.log("Sprawdzanie działania funkcji");
}



