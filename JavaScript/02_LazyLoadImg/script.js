console.log('Lazy loading images help of Javascript');

let images = document.getElementsByClassName('images');
images = Array.from(images);



let imgOptions = [];

//------------- Create the observer stuff to load images
let observer = new IntersectionObserver((entries,observer) =>{
    entries.forEach((entry)=>{

        //Check it already we have
        if(!entry.isIntersecting) return ;

        const img = entry.target;
        img.src = img.src.replace("w=10","w=1080")

        observer.unobserve(img);

    })
},imgOptions)

//---------- fetch the src of the all images
images.forEach((img,index)=>{

    console.log('check src s ',img.src);

    observer.observe(img);

})


