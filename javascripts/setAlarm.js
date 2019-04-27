/*
In this js file,we try to,
1.Set the options in the hours,min,sec menus
2.Accept the alarm choice
3.Check when currentTime becomes equal to set alarm time
4.Play sound accordingly

*/


//hoursmenu,minsmenu,secsmenu functions are to display the options during set the alarm process


function hoursmenu(){

    var menu=document.getElementById("alarmhrs");
    
    for(i=0;i<=12;i++){
        
        menu.options[menu.options.length]=new Option(i < 10 ? "0" + i : i);
    }
}

hoursmenu();


function minsmenu(){

    var menu=document.getElementById("alarmmins");

    for(i=0;i<=59;i++){
        menu.options[menu.options.length]=new Option(i < 10 ? "0" + i : i);
    }
}

minsmenu();


function secsmenu(){

    var menu=document.getElementById("alarmsecs");

    for(i=0;i<59;i++){
        menu.options[menu.options.length]=new Option(i < 10 ? "0" + i : i);
    }
}

secsmenu();


function setalarm(){

    var sound = new Audio( "https://www.freespecialeffects.co.uk/soundfx/telephone/phone_ring_1.wav" );
    sound.loop = true;


    var hr=document.getElementById("alarmhrs");
    var min=document.getElementById("alarmmins");
    var secs=document.getElementById("alarmsecs");
    var ap=document.getElementById("ampm");

    var selectedhr=hr.options[hr.selectedIndex].value;
    var selectedmins=min.options[min.selectedIndex].value;
    var selectedsecs=secs.options[secs.selectedIndex].value;
    var selectedap=ap.options[ap.selectedIndex].value;

    var setTime= selectedhr + ":" + selectedmins + ":" + selectedsecs +" "+ selectedap;

    console.log("Set Alarm time: "+setTime);

    hr.disabled=true;
    min.disabled=true;
    secs.disabled=true;
    ap.disabled=true;

/*
Here, we check whether current time == alarm time
*/  
     var x = setInterval(function() {
       
     

    var time=new Date();

    var chr = time.getHours();
    var cmin = time.getMinutes();
    var csecs = time.getSeconds();
    
    var csession="AM";
     
    if ( chr == 0){
        chr = 12;
    }

    if ( chr > 12){

        chr = chr - 12;
        csession = "PM";
    }

    chr = (chr < 10 )? "0" + chr : chr ;
    cmin = (cmin < 10 ) ? "0" + cmin : cmin;
    csecs = (csecs < 10) ? "0" + csecs : csecs;

    cTime = chr + ":" + cmin  + ":" + csecs + " " + csession ;

    console.log("Alarm Time Set : "+setTime);

    if ( cTime == setTime){
        console.log("Playing Sound!");
        sound.play();
    }

    if (hr.disabled == false){
        sound.pause();
        clearInterval(x);
        
        
    }


    },1000 );   

    
    
   






   

    
}


function clearalarm(){

    console.log("Alarm cleared");
    document.getElementById("alarmhrs").disabled=false;
    document.getElementById("alarmmins").disabled=false;
    document.getElementById("alarmsecs").disabled=false;
    document.getElementById("ampm").disabled=false;

    
    
    

}

