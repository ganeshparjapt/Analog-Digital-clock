# Analog-clock
design by ganesh Animated Analog clock indan standerd time zone 

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
}, 1000);![Screenshot (25)](https://user-images.githubusercontent.com/112177003/214372112-45d0ea87-4083-4ed8-9346-fa2a662c50bf.png)

