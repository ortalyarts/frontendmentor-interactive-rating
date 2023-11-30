var submitBtn = document.getElementById('submit');
var sectionRating = document.getElementById('rating');
var sectionThankyou = document.getElementById('thankyou');
var ratingNumber = document.getElementById('ratingNumber');

var activeRadio;
var arrayRadios = document.querySelectorAll('.radio-input');

for(var i = 0; i < arrayRadios.length; i++){

    // console.log(arrayRadios[i].value);

    arrayRadios[i].onclick = function(){
        activeRadio = this.value;
        // console.log(activeRadio);
        return activeRadio;
    }
}

submitBtn.addEventListener('click', function() {

    ratingNumber.innerHTML = activeRadio;
    sectionRating.style.display = 'none';
    sectionThankyou.style.display = 'block';

})
