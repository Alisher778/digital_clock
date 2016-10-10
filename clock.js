function timeRun(){
   var currentTime = new Date();
   var h = currentTime.getHours();
   var m = currentTime.getMinutes();
   var s = currentTime.getSeconds();
   var mil = currentTime.getMilliseconds();
   var diem = 'am';

//Declaring if the time AM or PM
   if (h>12){ h=h-12; diem = 'pm';}
   //Add 0 before time if less than 10. Not 9 instead 09
   if (h<10){ h = "0"+h; }

   if (m<10){ m = "0"+m; }//this is for minites

   if (s<10){ s = "0"+s; }//this is for seconds

   //Milleseconds correction by adding 000s in it
   if (mil<10){ mil = "00"+mil; }
   if (mil<100){ mil = "0"+mil; }
   if (mil==1000){ mil = 000; }

   var full = h+':'+m+':'+s+':'+mil+diem;//displaying full time
   var display = document.getElementById('clock');
   display.innerHTML = full;
   setTimeout(timeRun, 100);
}
timeRun();