var selected;
var buttoncount=5;
var buttoncountL=3;

function ban_in(obj)
	{
	if(obj != selected)
		{
		obj.style.backgroundImage="url(./img/ban1_mousein.png)";
		}
	else
		{
		obj.style.backgroundImage="url(./img/ban2_mousein.png)";
		}
	}

function ban_out(obj)
	{
	if(obj != selected)
		{
		obj.style.backgroundImage="url(./img/ban1_mouseout.png)";
		}
	else
		{
		obj.style.backgroundImage="url(./img/ban2_mouseout.png)";
		}
	}

function ban_create(text,url)
	{
	document.writeln('<div style="height:38px;"><div id="a'+buttoncount+'" class="banner" onMouseOver="javascript:ban_in(this);" onMouseOut="javascript:ban_out(this);" onclick="javascript:ban_content(this,\''+url+'\');">'+text+'</div></div>');
	buttoncount++;
	}

function ban_createL(text,url)
	{
	document.writeln('<div style="height:38px;"><a class="banner" onMouseOver="javascript:ban_in(this);" onMouseOut="javascript:ban_out(this);" href="'+url+'" target="_blank" rel="noopener">'+text+'</a></div>');
	buttoncountL++;
	}

function ban_content(obj,url)
	{
	//for(var i=0;i<buttoncount;i++)
	//	{
	//	document.getElementById("a"+i).style.backgroundImage="url(./img/ban1_mouseout.png)";
	//	}

	//eval(document.getElementById("content-ext").innerHTML);
	//selected=obj;
	framelogin.currentbanner.value=obj.id;
	obj.style.backgroundImage="url(./img/ban2_mousein.png)";
	ajaxget(url,"content");
	}
