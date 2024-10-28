function isEmail(email)
{
apa=0;
pkt=0;

for (i=0; i<email.value.length; i++) 
	{
	if (email.value.charAt(i)=="@") {apa=apa+1;}
	if (apa==1 && email.value.charAt(i)==".") {pkt=pkt+1;}
	}

if (apa!=1 || pkt<1 || email.value.length<7) 
	{
	alert("Das ist keine gueltige E-Mail-Adresse.");
	email.focus();
	email.select();
	return false;
	}
return true;
}





ï»¿function isStrongPW(pw)
{
uc=0;
lc=0;
num=0;
sz=0;
result = true;

for (i=0; i<pw.value.length; i++) 
	{
	ch = pw.value.charAt(i);

	if (ch>="a" && ch<="z") {lc=lc+1;}
	else if (ch>="A" && ch<="Z") {uc=uc+1;}
	else if (ch>="0" && ch<="9") {num=num+1;}
	else {sz=sz+1;}
	}

if ( result && pw.value.length<7 ) 
	{
	alert("Das Passwort ist zu kurz.");
	result = false;
	}

if ( result && (lc==0 || uc==0) ) 
	{
	alert("Das Passwort sollte Groß- und Kleinbuchstaben enthalten.");
	result = false;
	}

if ( result && num==0 && sz==0 ) 
	{
	alert("Das Passwort sollte Zahlen und/oder Sonderzeichen enthalten.");
	result = false;
	}

if ( !result ) 
	{
	pw.focus();
	pw.select();
	}

return result;
}




function isNotEmpty(element)
{
if(element.value == '' || element.length == 0)
	{
	alert('Feld ' + element.name + ' ist leer');
	element.focus();
	element.select();
	return false;
	}
return true;
}

