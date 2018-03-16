//Get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for click event
modalBtn.addEventListener('click', openModal);
// listen for close click event
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', outsideClick);


//fuction to open modal
function openModal(){
    modal.style.display = 'block';
}

//fuction to close the modal
function closeModal(){
    modal.style.display = 'none';
}
//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}