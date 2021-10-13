var images = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "gp.jpg"];
var names = ["Rajanna Rudrappa", "Chetan V Gowda", "Anvik Ravin Gowda",  "Shilpa", "Nagarathna C"];
var i = 0;
function slide(){
  document.getElementById("family_member_name").innerHTML=names[i];
  document.getElementById("family_member_image").src=images[i];
  i++;
}

