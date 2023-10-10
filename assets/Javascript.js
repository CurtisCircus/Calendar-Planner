$(function () {
    $(".saveBtn").on("click", function () {
    var parentDiv = $(this).closest(".time-block");
          var textarea = parentDiv.find(".description");
          var textareaValue = textarea.val();
          var uniqueId = parentDiv.attr("id");
        localStorage.setItem(uniqueId, textareaValue);
    });

    $(document).ready(function() {
      var currentDate = dayjs();
      var currentHour = currentDate.hour();
  
      $('.time-block').each(function() {
          var divId = parseInt($(this).attr('id'));
  
          if (currentHour > divId) {
            
            $(this).removeClass('present future').addClass('past');
        } else if (currentHour < divId) {
            
            $(this).removeClass('past present').addClass('future');
        } else {
            
            $(this).removeClass('past future').addClass('present');
        }
    });
});

    $('.time-block').each(function() {
      var divId = $(this).attr('id');
      var savedInput = localStorage.getItem(divId); 
      
      if (savedInput !== null) {
          $(this).find('.description').val(savedInput);
      }
  });

    var displayDate = $('#currentDay');
    displayDate.text(dayjs().format('MMMM D, YYYY'));
  });