$.getScript( "https://code.jquery.com/jquery-3.2.1.min.js", function( data, textStatus, jqxhr ) {
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});

var LastNumberOfThreads = 5; //Numer ostatniego wprowadzonego tematu


var imageSlider = [
	"../Threads/"+(LastNumberOfThreads-4)+".jpg",
	"../Threads/"+(LastNumberOfThreads-3)+".jpg",
	"../Threads/"+(LastNumberOfThreads-2)+".jpg",
	"../Threads/"+(LastNumberOfThreads-1)+".jpg",
	"../Threads/"+(LastNumberOfThreads-0)+".jpg",
]

for(var i=1; i<=imageSlider.length; i++){
	
	//$('div#imageSlider').append('<img src=" + imageSlider[i] + "/>');
	//var img = document.createElement("img");
	//img.src = imageSlider[i];
	document.getElementById('imageSlider').innerHTML = "<img src='../Threads/4.jpg'/>";
	
	//var src = document.getElementById("imageSlider");
	//src.appendChild(img);
	//
	
	console.log(i);
	console.log(imageSlider[i-1]);

}

$('div#imageSlider').append('<img src="../Threads/5.jpg" class="imageSlider"/>');

$('#imageSlider').click(function()
{
	$(this).attr("src", "../Threads/5.jpg");
});



console.log($("#imageSlider").length);

//document.getElementById('imageSlider').src=imageSlider[0];



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
    //hideSlide();
    //document.getElementById('imageSlider').style.display="none";
    //document.getElementById('imageSlider').src=imageSlider[imagecount];
    //document.getElementById('imageSlider').style.display="block";
    //showSlide();
    console.log($("#firstSlider").lenght);
    
}
  
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