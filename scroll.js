document.querySelector('#items').addEventListener('wheel',event =>{
  if(event.deltaY > 0){
    event.target.scrollBy(600,0);
    console.log('scroll up');
    
  }
  else{
    event.target.scrollBy(-600,0);
    console.log('scroll down');
    
  }
});