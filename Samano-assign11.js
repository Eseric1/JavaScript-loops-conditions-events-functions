let catImages = ["https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1", 
                 "https://th.bing.com/th/id/R.ae3cb855de10bb7f868ef2e0503bc8bd?rik=kwBBRn2ML4YlzA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-l3C5clBiSbo%2fUPO87pyZkLI%2fAAAAAAAAAg8%2fVtv4ALqGiWE%2fs1600%2fback%2bcat%2b05.jpg&ehk=S6mLHnZSoYJZClBbdj1h4RL%2fctxb4qDUgMdLbJOzPqI%3d&risl=&pid=ImgRaw&r=0",
                 "https://th.bing.com/th/id/OIP.RJYPvckyym6mP0uMT2LoAQAAAA?pid=ImgDet&rs=1", 
                 "https://th.bing.com/th/id/OIP.KWFc9rUZ6xFeNV40geTRZwHaEK?pid=ImgDet&rs=1", 
                 "https://th.bing.com/th/id/OIP.vSYQsQjY0smytjYza4wAfgHaE6?pid=ImgDet&rs=1"];
let dogImages = ["https://www.nydailynews.com/resizer/6lNkrOzdpooQJ3tozovcEYX_E38=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/Y25C4YRSO3DBPBZOATATUYNS6E.jpg",
                 "https://th.bing.com/th/id/OIP.875Uvd356M_upkjf-l8DlwHaE7?pid=ImgDet&rs=1", 
                 "https://www.pixelstalk.net/wp-content/uploads/2016/11/Download-Bulldog-Picture-1.jpg", 
                 "https://www.thesprucepets.com/thmb/mj15-4-nj8uCnFiYBXuSil8TbUA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-566943335-79f16d740c794e77bf160dc46bb06f94.jpg",
                 "https://cdn.suwalls.com/wallpapers/animals/happy-dog-with-its-tongue-out-49317-1920x1200.jpg"];
let birdImages = ["https://th.bing.com/th/id/R.9aacc0159d58c8834e3bad1d415bbd5c?rik=zaNP5R3gvD3t5Q&pid=ImgRaw&r=0", 
                  "https://th.bing.com/th/id/R.d84d6b02e6f534b87aceee677c792b8c?rik=9VQDttHyUa7Q0g&riu=http%3a%2f%2fcdn.pearltrees.com%2fs%2fpic%2fla%2fparrot-bird-43135399&ehk=NZirPKz8d2FJd%2fXTuvQpY2sAiP8v%2fy%2bbZOjioZuKhfA%3d&risl=&pid=ImgRaw&r=0", 
                  "https://th.bing.com/th/id/OIP.bWgUs0M1-3e7jT2nubKz1AHaEo?pid=ImgDet&rs=1", 
                  "https://africanbirdclub.org/afbid/public/imgdata/photos/1567/15671527012817.jpg", 
                  "https://fthmb.tqn.com/KZ-0kZ6adlHNArexvODJcx_IhgU=/960x0/filters:no_upscale()/GettyImages-597187685-577c1dd23df78cb62c68e725.jpg"];

// Create a function that takes an array of images as a parameter
function showImages(images) {
  
  // Clear any previous interval
  clearInterval(window.interval);
  // Get the image element from the HTML document
  let image = document.getElementById("image");
  // Initialize a variable to keep track of the current index
  let index = 0;
  // Create a function that displays the next image in the array
  
  function displayNextImage() {
      // Clear the previous image source
  image.src = "";
    // Set the source attribute of the image element to the current image in the array
    image.src = images[index];
    // Increment the index by one
    index++;
    // If the index reaches the end of the array, reset it to zero
    if (index == images.length) {
      index = 0;
    }
  }
  // Call the displayNextImage function for the first time
  displayNextImage();
  // Use setTimeout to call the displayNextImage function again after one second
  window.interval = setInterval(displayNextImage, 1000);
}

// Get the buttons from the HTML document
let catButton = document.getElementById("cat-button");
let dogButton = document.getElementById("dog-button");
let birdButton = document.getElementById("bird-button");

// addEventListener to attach a click event listener to each button
catButton.addEventListener("click", function() {
  showImages(catImages);
});
dogButton.addEventListener("click", function() {
  showImages(dogImages);
});
birdButton.addEventListener("click", function() {
  showImages(birdImages);
});