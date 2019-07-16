/*************************************************
 The following code will shuffle the testimonials
 and will show only the first several testimonials.
 For best performance, load this script right after
 the HTML code for the testimonials so that the DOM
 changes and displays happen right after the 
 testimonials are added to the DOM. 
***************************************************/

/* return integer in range [min,max] */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* maximum number of testimonials to show */ 
var N_TO_SHOW = 6;

/* shuffling code */
var testimonialsContainer = document.getElementById('testimonials');
var $testimonials = document.querySelectorAll('.testimonial');
var nTotal = $testimonials.length;
/* generate random permutation of 1 to nTotal using in-place Fisher-Yates */
var indexes = [];
for(var i=0; i<nTotal; i++) {
   var j = getRndInteger(0,i+1);
   if(i != j) 
      indexes[i] = indexes[j];
   indexes[j] = i;
}
/* in case there are fewer testimonials than we want to show */
var maxShows = Math.min(N_TO_SHOW, nTotal);
/* move the first maxDraws testimonials at indices in indexes to the front */
for(var i=0; i<maxShows; i++) {
   testimonialsContainer.insertBefore( $testimonials[ indexes[i] ], testimonialsContainer.firstChild )
}
/* change CSS toshow up to the first maxShows testimonial divs */
$testimonials = document.querySelectorAll('.testimonial');
for(var i=0; i<maxShows; i++) {
   $testimonials[i].style.display = "block";
}
