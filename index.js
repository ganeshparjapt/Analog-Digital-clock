setInterval(()=>{
 console.log("harry is good techer");
 d = new Date();
 htime= d.getHours();
 mtime= d.getMinutes();
 stime= d.getSeconds();
 mltime =d.getMilliseconds();
 console.log("this is htime",htime); 
 console.log("this is mtime",mtime); 
 console.log("this is stime",stime); 
 hrotation = 1/2 * mtime + 30* htime;
 mrotation = 6* mtime;
//  srotation = 6/1000*mltime;
srotation =6*stime;

 hour.style.transform = `rotate(${hrotation}deg)`
 minute.style.transform=`rotate(${mrotation}deg)`
 second.style.transform=`rotate(${srotation}deg)`
},1000)
