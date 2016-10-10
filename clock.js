function timeRun(){
   var currentTime = new Date();
   var h = currentTime.getHours();
   var m = currentTime.getMinutes();
   var s = currentTime.getSeconds();
   var mil = currentTime.getMilliseconds();
   var diem = 'am';

   if (h>12){ //Declaring if the time AM or PM
     h=h-12; 
     diem = 'pm';
   }
   if (h<10){//Add 0 before time if less than 10. Not 9 instead 09
    h = "0"+h;
   }
   if (m<10){//this is for minites
    m = "0"+m;
   }
   if (s<10){
    s = "0"+s;
   }
   if (mil<10){
    mil = "00"+mil;
   }
   if (mil<100){
    mil = "0"+mil;
   }
   if (mil==1000){
    mil = 000;
   }

   var full = h+':'+m+':'+s+':'+mil+diem;
   var display = document.getElementById('list');
   display.innerHTML = full;
   setTimeout(timeRun, 100);
}
timeRun();