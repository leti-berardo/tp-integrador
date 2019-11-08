$(document).ready(function(){
    $('.datepicker').datepicker({
      yearRange: [1950,2030],
      changeMonth: true,
      changeYear: true,
    });
    $('#documento').characterCounter();
  });