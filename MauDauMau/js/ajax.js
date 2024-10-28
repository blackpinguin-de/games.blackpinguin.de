var loading = false;

var loadingtext = "<span style='font-size:16pt;'>Seite wird geladen ...</span><span style='font-size:8pt;'><br><br>Diese Seite ist f&uuml;r ";
loadingtext += "<a href='https://mozilla.org/firefox/' target='_blank' rel='noopener'>Mozilla Firefox</a> konzipiert.";
loadingtext += "<br>Sollten bei Ihnen unter einem anderem Browser Probleme auftreten, haben Sie Pech.";
loadingtext += "<br>Bei Problemen mit Mozilla Firefox schreiben Sie mir bitte eine eMail.<br><br><a href='imp.html' target='_blank' rel='noopener'>Impressum</a></span>";

function callback(data, serverStatus, url, container){
var cont = document.getElementById(container);
loading=false;
if(serverStatus==200){
	cont.style.cursor = "auto";
	cont.innerHTML = data;
	if(url.substring(0,9)=="pic&sub=1"){
		ajaxget('pic&sub=2'+url.substring(9,url.length),'content-ext');
	}
	if(url.substring(0,9)=="pic&sub=2"){
		eval(document.getElementById('content-ext').innerHTML);
	}
	if(url=="mp3"){
		loadfile();
	}
	var scs = cont.querySelectorAll("script");
	for(var i=0; i<scs.length; i++){
		eval(scs[i].innerHTML);
	}
}
else {
	cont.innerHTML = "Error: req state != 200";
	cont.style.cursor = "auto";
}
}




function ajaxget(url,container) 
{
alert('Not implemented in this backup website.'); return;
if(!loading)
	{
	var AJAX = null;
	if (window.XMLHttpRequest)
		{
		AJAX=new XMLHttpRequest();
		}
	else
		{
		AJAX=new ActiveXObject("Microsoft.XMLHTTP");
		}
	if (AJAX==null)
		{
		document.getElementById(container).innerHTML = "Dein Browser unterstützt kein Ajax.";
		}
	else
		{
		loading=true;
		framelogin.currentpage.value=url;
		document.getElementById(container).innerHTML = loadingtext;
		document.getElementById(container).style.cursor = "wait";

		AJAX.onreadystatechange = function()
			{
			if (AJAX.readyState==4 || AJAX.readyState=="complete") {callback(AJAX.responseText, AJAX.status, url, container);}
			}
		AJAX.open("GET", "/include.php?s="+url, true);
		AJAX.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
		AJAX.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		AJAX.send(null);
		}
	}
else
	{
	window.setTimeout("ajaxget('"+url+"','"+container+"')",50);
	}
}











function ajaxpost(url,container) 
{
if(!loading)
	{
	var AJAX = null;
	if (window.XMLHttpRequest)
		{
		AJAX=new XMLHttpRequest();
		}
	else
		{
		AJAX=new ActiveXObject("Microsoft.XMLHTTP");
		}
	if (AJAX==null)
		{
		document.getElementById(container).innerHTML = "Dein Browser unterstützt kein Ajax.";
		}
	else
		{
		loading=true;

		alleInputs=document.getElementsByTagName('input');
		param='';
		for(var i=0; i < alleInputs.length; i++)
			{
			param=param + alleInputs[i].name + '=' + escape(alleInputs[i].value);
			if( i < ( alleInputs.length -1 ) )
				{
				param = param + '&';
				}
			}
		alleInputs2=document.getElementsByTagName('textarea');
		if (alleInputs.length>0 && alleInputs2.length>0)
			{
			param=param+'&'
			}	
		for(var i=0; i < alleInputs2.length; i++)
			{
			param=param + alleInputs2[i].name + '=' + escape(alleInputs2[i].value);
			if( i < ( alleInputs2.length -1 ) )
				{
				param = param + '&';
				}
			}
		
		document.getElementById(container).innerHTML = loadingtext;
		document.getElementById(container).style.cursor = "wait";

		AJAX.open("POST","include.php?s="+url,true);
		AJAX.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
		AJAX.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		AJAX.setRequestHeader("Content-length", param.length);
		AJAX.setRequestHeader("Connection", "close");
		
		AJAX.onreadystatechange = function()
			{
			if (AJAX.readyState==4 || AJAX.readyState=="complete") {callback(AJAX.responseText, AJAX.status, url, container);}
			}		

		AJAX.send(param);
		}
	}
else
	{
	window.setTimeout("ajaxpost('"+url+"','"+container+"')",50);
	}
}




