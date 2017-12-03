//console.log("Height body = "+ $("body").height());
//console.log("Height window = "+ $(window).height());

function Scroll()
{
	if(window.pageYOffset > ($(window).height()*0,95))
	{
		$("#signature").fadeTo(3000, 1.0);
		//console.log(window.scrollY);
	}
}

window.addEventListener("scroll",Scroll);


