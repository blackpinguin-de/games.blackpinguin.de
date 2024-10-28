var b_url = new Array();
var b_zeit = new Array();
var b_kat = new Array();
var b_name = new Array();
var b_besch = new Array();
var bigurl = "";

animationLock=false;


function zeilenanzahl(eingabe)
{
if (eingabe.length = 0) 
	{
	return 0;
	}
else
	{
	return eingabe.split("<br>").length;
	}
} 




function picshow(imgindex)
{
if(animationLock==false)
	{
	init();
	text_load(imgindex);

	var url = b_url[imgindex];
	var exists = url != "/pic/nopic.png";
	v_image.src = (exists ? "/pic/med/" + url : url);
	bigurl = (exists ? "/pic/big/" + url : url);

	img_load(imgindex);
	fade_blackschleife = window.setInterval("showBlack()",20);
	fade_lightschleife = window.setInterval("showLight()",10);
	}
}






function init()
{
animationLock=true;
delete v_image;
v_image = new Image();
th=0;

f_light = document.getElementById("lightBoxRoot");
f_holder = document.getElementById("lightBoxHolder");
f_black= document.getElementById("blackDrop");

f_id = document.getElementById("imageID");
f_name = document.getElementById("imageName");
f_kat = document.getElementById("imageKat");
f_time = document.getElementById("imageTime");
f_besch = document.getElementById("imageBesch");

//f_url= document.getElementById("imagelink");
f_close= document.getElementById("closebut");


f_black.style.opacity = "0";
f_black.style.filter = "alpha(0)";
f_light.style.opacity = "0";
f_light.style.filter = "alpha(0)";

blackschleife=0;
lightschleife=0;
}










function text_load(imgindex)
{
f_id.innerHTML = "&nbsp;"+ imgindex;
f_name.innerHTML = "&nbsp;"+ b_name[imgindex];
f_kat.innerHTML = "&nbsp;"+ b_kat[imgindex];
f_time.innerHTML = "&nbsp;"+ b_zeit[imgindex];
f_besch.innerHTML = b_besch[imgindex];
//f_url.href=b_url[imgindex];
th=88+(zeilenanzahl(b_besch[imgindex])*30);
}







function img_load(imgindex)
{
if(v_image.complete)
	{
	
	if( typeof( window.innerWidth ) == 'number' )
		{
		//Non-IE
		sw = window.innerWidth;
		sh = window.innerHeight;
		}
	else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) 
		{
		//IE 6+ in 'standards compliant mode'
		sw = document.documentElement.clientWidth;
		sh = document.documentElement.clientHeight;
		}
	else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) 
		{
		//IE 4 compatible
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
		}
	//sh=parseInt(window.innerHeight);
	//sw=parseInt(window.innerWidth);

	ih=parseInt(v_image.height);
	iw=parseInt(v_image.width);

	f_holder.src = v_image.src;

	
	if ( iw >= (sw-50) )
		{
		ih = ( (sw-50) / iw * ih );
		iw = (sw-50);
		}
	
	if ( ih >= (sh-50-th) )
		{
		iw = ( (sh-50-th) / ih * iw );		
		ih = (sh-50-th);
		}

	f_holder.style.height = ih + "px";
	f_holder.style.width = iw + "px";
	
	f_light.style.width=iw+"px";

	f_light.style.top= ((sh/2)-(ih/2)-(th/2)) + "px";
	f_light.style.left= ((sw/2)-(iw/2)) + "px";

	show();
	}
else 
	{
	window.setTimeout("img_load("+imgindex+")",250);
	}
}







function show()
{
f_black.style.height = parseInt(document.body.scrollHeight)+"px";
f_black.style.position = "fixed";
f_black.style.display = "block";

f_light.style.visibility = "visible";


if(f_besch.innerHTML!="")
	{
	f_besch.style.visibility = "visible";
	}
else
	{
	f_besch.style.visibility = "hidden";
	}

}










function showLight()
{
if(lightschleife>=110)
	{
	window.clearInterval(fade_lightschleife);
	lightschleife=0;
	animationLock=false;
	}
else
	{
	f_light.style.opacity = lightschleife/100;
	f_light.style.filter = "alpha(opacity="+(lightschleife/100)*100+")";
	lightschleife += 3;
	}
}







function showBlack()
{
if(blackschleife>=80)
	{
	window.clearInterval(fade_blackschleife);
	blackschleife=0;
	}
else
	{
	f_black.style.opacity = blackschleife/100;
	f_black.style.filter = "alpha(opacity="+(blackschleife/100)*100+")";
	blackschleife += 3;
	}
}









function picclose()
{
if(!animationLock)
	{
	f_holder.style.height="0px";
	f_holder.style.width="0px";
	f_light.style.width="0px";
	f_besch.style.visibility = "hidden";
	f_light.style.visibility = "hidden";
	f_black.style.display = "none";
	}
}











function link()
{
//location.href=bigurl;
window.open(bigurl, '_blank');
}










