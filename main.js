var submitBtn = document.getElementById('submit');
var sectionRating = document.getElementById('rating');
var sectionThankyou = document.getElementById('thankyou');
var ratingNumber = document.getElementById('ratingNumber');


    submitBtn.addEventListener('click', function() {
        if(document.getElementById('radio1').checked) {
            var checkedRadio = 1;
          }
          else if(document.getElementById('radio2').checked) {
            checkedRadio = 2;
          }
          else if(document.getElementById('radio3').checked) {
            checkedRadio = 3;
          }
          else if(document.getElementById('radio4').checked) {
            checkedRadio = 4;
          }
          else if(document.getElementById('radio5').checked) {
            checkedRadio = 5;
          }
          else {
            alert('Please select one option');
          }

    ratingNumber.innerHTML = checkedRadio;
    sectionRating.style.display = 'none';
    sectionThankyou.style.display = 'block';

})
