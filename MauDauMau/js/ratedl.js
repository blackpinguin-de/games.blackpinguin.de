var rate_proj_id = -1;

function rShow(projid)
{
rate_proj_id = projid;
obj_rFrame = document.getElementById("rFrame");

obj_rFrame.style.visibility = "visible";
//Mittig positionieren

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

obj_rFrame.style.left = ((sw/2)-(obj_rFrame.style.width/2)) + "px";
obj_rFrame.style.top = ((sh/2)-(obj_rFrame.style.height/2)) + "px";

}

function rVote(rating)
{
	ajaxget("dl&sub=4&id="+rate_proj_id+"&r="+rating,"content");
	rClose();
/*
if( rate_proj_id != -1)
	{
	ajaxget("dl&sub=4&id="+rate_proj_id+"&r="+rating,"content");
	rClose();
	}
*/
}

function rMin(rimg)
{
document.getElementById("rate1").className = "rate1";
if(rimg>=2) {document.getElementById("rate2").className = "rate1";}
else {document.getElementById("rate2").className = "rate0";}
if(rimg>=3) {document.getElementById("rate3").className = "rate1";}
else {document.getElementById("rate3").className = "rate0";}
if(rimg>=4) {document.getElementById("rate4").className = "rate1";}
else {document.getElementById("rate4").className = "rate0";}
if(rimg>=5) {document.getElementById("rate5").className = "rate1";}
else {document.getElementById("rate5").className = "rate0";}
}


function rClose()
{
document.getElementById("rFrame").style.visibility = "hidden";
rate_proj_id = -1;
}