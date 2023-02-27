# Analog-clock with digital 
# open  https://ganeshparjapt.github.io/Analog-Digital-clock/
design by ganesh Animated Analog clock with digital indan standerd time zone 

==>> Animated Analog Clock using HTML,CSS & javaScript

       setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
 
<h3> << open in your brouser clone this rapo and dubble click on index.html just one stap >> </h3>

look like
![Screenshot 2023-02-27 110915](https://user-images.githubusercontent.com/112177003/221483834-ffe32967-872a-40bd-859d-7f7dcfc3774f.png)



