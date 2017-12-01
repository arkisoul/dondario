//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

$(function () {
    $('.next_sec').on('click', function(event) {
        event.preventDefault();
        var parent_ele = $(this).parents('header, section');
        var target_ele = $(parent_ele).next('section');
        console.log(parent_ele);
        console.log(target_ele);
        var pos = $(target_ele).offset().top;
        /* Act on the event */
        $('body, html').animate({
            scrollTop: pos
        }, 1000);
        return false;
    });

    $('.side_nav li').on('click', function(event) {
        /* Act on the event */
        var sec_id = $(this).find('a').attr('href');
        var $target_id = $(sec_id);
        if( $target_id.length === 0) {
            return;
        }
        event.preventDefault();
        var pos = $target_id.offset().top;

        $('body,html').animate({scrollTop: pos}, 1000);
    });
});

$(function () {
  $('.select').select2();

  $.fn.select2.defaults.set( "theme", "bootstrap" );

  $(".prov-sel").select2({
    placeholder: "Province",
    allowClear: true
  });

  $(".dist-slect").select2({
    placeholder: "District",
    allowClear: true
  });

  $(".ship-select").select2({
    placeholder: "Shipping Option",
    allowClear: true
  });

  $(".state-sel").select2({
    placeholder: "State",
    allowClear: true
  });

});
