
// copy text to clip board on (text field)
function copyLink(link, inputFiled) {
  if(!inputFiled){
    var copyText = document.getElementById(link);

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);

    // set tool tip text
    var tooltip = document.getElementsByClassName("toolTip");
    for(let i =0; i<tooltip.length ; i++){
        tooltip[i].innerHTML="Copied: " + copyText.innerText;
    }
  }
  else {
    var copyText = document.getElementById(link);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    // set tool tip text
    var tooltip = document.getElementsByClassName("toolTip");
    for(let i =0; i<tooltip.length ; i++){
        tooltip[i].innerHTML="Copied: " + copyText.value;
    }
  }
  
}

// when unhover , we change text to default
function outFunc() {
  var tooltip = document.getElementsByClassName("toolTip");
    for(let i =0; i<tooltip.length ; i++){
        tooltip[i].innerHTML="Copy to clipboard";
    }
}


// add or remove class ( time line buttons )
$(".btn_timeLine").click(function () {
  $(".btn_timeLine").removeClass("btn_active_timeline");
  $(this).addClass("btn_active_timeline");
});

// switch buttons in proofs page
$(".btn_section").click(function () {
  $(".btn_section").removeClass("btn_section_active");
  $(this).addClass("btn_section_active");
});


// open and close tab
function ToogleWhiteSection(){
  $('.section_item_space').toggleClass('openTab')
}

// remove section 
$('.btn_remove').click(function(){
  $(this).parent().parent().parent().fadeOut()
})

$('#deleteForms').click(function(){
  $(this).parent().fadeOut()
})

