 $(document).ready(function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


$(".full").click(function(){
    $(".modal-full-"+$(this).attr("rel")).show().css("display", "flex");
})
$(".js-pmenu").click(function(event){
    if($(this).hasClass("js-active")){
        $(this).removeClass("js-active");
        $(".js-menu").hide()
    }else{
        $(this).addClass("js-active");
        $(".js-menu").show().css("display", "flex")
    }
    event.stopPropagation();
})

$(".js-more").click(function(event){
    if($(this).hasClass("js-active")){
        $(this).removeClass("js-active");
        $(".more-menu").hide()
    }else{
        $(this).addClass("js-active");
        $(".more-menu").show().css("display", "flex")
    }
    event.stopPropagation();
})

$(".more-menu").click(function(event){
    event.stopPropagation();
})

$(".signn").click(function(){
  var a = $(this).parent().find(".chec").val();
  if (a =="admin"){
    window.location.href = '/home.html';
  }else{
    window.location.href = '/developer.html';    
  }
})
$(".js-menu").click(function(event){
    event.stopPropagation();
})

// $(".addn").click(function(event){
//     var plc = $(this).parent();
//     $( "<p></p>" ).insertBefore( ".inner" );

// })

$(".addn").click(function(event){
    $(".modal-add").show().css("display", "flex");
})


$(".edit").click(function(){
    $(".modal-edit-1").show().css("display", "flex");
})
$(".fav").click(function(){
    $(".modal-fav").show().css("display", "flex");
})
$(".pause").click(function(){
    var proname = $(this).parent().prev().html();
    $(".proj-name").html(proname);
    $(".modal-pause").show().css("display", "flex");
})

$(".play").click(function(){
    var proname = $(this).parent().prev().html();
    $(".proj-name").html(proname);
    $(".modal-play").show().css("display", "flex");
})
$(".done").click(function(){
    var proname = $(this).parent().prev().html();
    $(".proj-name").html(proname);
    $(".modal-done").show().css("display", "flex");
})

$(".modal-button").click(function(){
    $(".modal-suc-1").show().css("display", "flex");
})
$(".save").click(function(){
    $(".modal-suc-1").show().css("display", "flex");
})
$(".mute").click(function(){
    $(".modal-mute").show().css("display", "flex");
})
$(".a").click(function(){
    $(".modal-add").show().css("display", "flex");
})

$("body").click(function(){
    $(".js-menu").hide();
    $(".js-pmenu").removeClass(".js-active")
    $(".more-menu").hide();
    $(".js-more").removeClass(".js-active")
})

$(".system-post").click(function(){
    $(".system-post").removeClass("sys-active");
    $(this).addClass("sys-active");
})

$(".developer").click(function(){
    if($(this).hasClass("developer-active")){
        $(this).removeClass("developer-active");
    }
    else{
        $(this).addClass("developer-active");
    }
})

$(".close").click(function(){
    $(".modal").hide();
})

window.onload = function () {

    var options = {
        animationEnabled: true,  
        title:{
            text: "progress of Aibolat by month"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "projects",
            prefix: "project",
            includeZero: false
        },
        data: [{
            yValueFormatString: "#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 1 },
                { x: new Date(2017, 1), y: 3 },
                { x: new Date(2017, 2), y: 4 },
                { x: new Date(2017, 3), y: 2 },
                { x: new Date(2017, 4), y: 3 },
                { x: new Date(2017, 5), y: 4 },
                { x: new Date(2017, 6), y: 5 },
                { x: new Date(2017, 7), y: 2 },
                { x: new Date(2017, 8), y: 1 },
                { x: new Date(2017, 9), y: 4 },
                { x: new Date(2017, 10), y: 5 },
                { x: new Date(2017, 11), y: 3 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }

// Select menu

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// 


// Textarea
$(".textarea").click(function(event){
    if($(".contact__mail").css("right") == "10px"){
        $(".contact__mail").css({"opacity":"0", "visibility":"hidden"});
    }
    $(document).click(function() {
        $(".contact__mail").css({"opacity":"1", "visibility":"visible"});
    });
})

// 

// File Upload
$( '.file' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
// 

// Popup - Apply for Job

    $(".apply-button").click(function(){
        $(".apply").show().css("display", "flex");
        $("body").css("overflow", "hidden");
    });
    $(".apply__wrapper").click(function(event){
        event.stopPropagation();        
    });
    $(".fa-times").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");
        
    });
    $(".apply").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");

    });
});
// 

// Spoiler
$(".spoiler__title").click(function(){
    $(this).toggleClass("spoiler__title-active");
    $(this).next().slideToggle();
})

// 

// Filter
$(".filter-show").click(function(){
    $(".search__col").slideToggle();
});

$(".filter-cancel").click(function(){
    $(".search__col").slideToggle();
});


var schedule = {
    initialize: function(){
      schedule.activities.set();
      
    }, 
    options: {
      schedule: '#schedule', 
      breaks: [5,5,10,20,10,20,10,5,5], // breaks duration
      s_breaks: [475,525, 575, 630, 695, 750, 815, 870, 920], // the time after which the break begins
      lesson_time: 45, // lesson duration (minutes)
      lessons: 9, // number of lessons per week
      start: function(){ // start at 7.10 
        return schedule.general.toMin(7,10)
      }, 
      end: function(){ // start at 16.10 
        return schedule.general.toMin(16,10)
      },
      h_width: $('.s-hour-row').width(), // get a width of hour div
      minToPx: function(){ // divide the box width by the duration of one lesson
        return schedule.options.h_width / schedule.options.lesson_time;
      },
    },
    general: {
      hoursRegEx: function(hours){
        var regex = /([0-9]{1,2}).([0-9]{1,2})-([0-9]{1,2}).([0-9]{1,2})/;
        if(regex.test(hours)){
          return true;
        }else{
          return false;
        }
        
      },
      toMin: function(hours, minutes, string){ 
        // change time format (10,45) to minutes (645)
        if(!string){
          return (hours * 60) + minutes;
        }
        
        if(string.length>0){
          // "7.10"
          var h = parseInt(string.split('.')[0]),
              m = parseInt(string.split('.')[1]);
          
          return schedule.general.toMin(h, m);
        }
      },
      getPosition: function(start, duration, end){
        var translateX = (start - schedule.options.start()) * schedule.options.minToPx(),
            width = duration * schedule.options.minToPx(),
            breaks = schedule.options.breaks,
            s_breaks = schedule.options.s_breaks;
        
        $.each(breaks, function(index, item) { 
          if( start < s_breaks[index] && duration > item && end > (s_breaks[index]+item) ){
            width -= item * schedule.options.minToPx();
          }
          if( start > s_breaks[index] && duration > item && end > (s_breaks[index]+item) ){
            translateX -= item * schedule.options.minToPx();
          }
        }); 
        
        return [translateX, width];
      }
    },
    activities: {
      find: function(week, hours, id){
        
      },
      delete: function(week, hours){
        /* week: 0-4 << remove all activities from a day 
           hours: "7.10-16.10" << remove all activities from a choosed hours
        */
        function finalize(message){
          if(confirm(message)){
            return true;
          }
        }
        
        if(week && !hours){
          if(finalize("Do you want to delete all activities on the selected day?")){
            $('.s-activities .s-act-row:eq('+ week +')').empty();
          }
        }
        
        if(!week && !hours){
          console.log('Error. You have to add variables like a week (0-4) or hours ("9.10-10.45")!')
        }
        // if day is not defined and hours has got a correct form
        if(!week && schedule.general.hoursRegEx(hours)){
          
            console.log('Week not defined and hours are defined!');
          
            $(schedule.options.schedule + ' .s-act-tab').each(function(i,v){
                var t = $(this), // get current tab
                    name = t.children('.s-act-name').text(), // get tab name
                    h = t.attr('data-hours').split('-'), // get tab hours
                    s = schedule.general.toMin(0,0, h[0]), // get tab start time (min)
                    e = schedule.general.toMin(0,0, h[1]), // get tab end time (min)
                    uh = hours.split('-'), // user choosed time
                    us = schedule.general.toMin(0,0, uh[0]), // user choosed start time (min)
                    ue = schedule.general.toMin(0,0, uh[1]); // user choosed end time (min)
  
                if(us<=s && ue>=e){
                   $(this).remove();
                }
  
              })
          
        }
      
        if(week && hours){
          // if week and hours is defined 
          console.log('Week is defined and hours are defined too!');
          
          $('#schedule .s-act-row:eq('+ week +') .s-act-tab').each(function(i,v){
                var t = $(this), // get current tab
                    name = t.children('.s-act-name').text(), // get tab name
                    h = t.attr('data-hours').split('-'), // get tab hours
                    s = schedule.general.toMin(0,0, h[0]), // get tab start time (min)
                    e = schedule.general.toMin(0,0, h[1]), // get tab end time (min)
                    uh = hours.split('-'), // user choosed time
                    us = schedule.general.toMin(0,0, uh[0]), // user choosed start time (min)
                    ue = schedule.general.toMin(0,0, uh[1]); // user choosed end time (min)
  
                if(us<=s && ue>=e){
                   $(this).remove();
                }
  
            })
          
          
        };
        
      },
      add: function(week, lesson, hours, classroom, group, teacher, color){
        /* EXAMPLES --> week: 0-4, lesson: "Math", hours: "9.45-12.50", 
        classroom: 145, group: "A", teacher: "A. Badurski", color: "orange" */
        var tab = "<div class='s-act-tab "+ color +"' data-hours='"+ hours +"'>\
              <div class='s-act-name'>"+ lesson +"</div>\
              <div class='s-wrapper'>\
                <div class='s-act-teacher'>"+ teacher +"</div>\
                <div class='s-act-room'>"+ classroom +"</div>\
                <div class='s-act-group'>"+ group +"</div>\
              </div>\
            </div>";
        $('.s-activities .s-act-row:eq('+ week +')').append(tab);
        schedule.activities.set();
      },
      set: function(){
        $(schedule.options.schedule + ' .s-act-tab').each(function(i){
          var hours = $(this).attr('data-hours').split("-"),
              start = /* HOURS */ parseInt(hours[0].split(".")[0]*60) 
              + /* MINUTES */ parseInt(hours[0].split(".")[1]),
              end = /* HOURS */ parseInt(hours[1].split(".")[0]*60) 
              + /* MINUTES */ parseInt(hours[1].split(".")[1]),
              duration = end - start,
              translateX = schedule.general.getPosition(start,duration,end)[0],
              width = schedule.general.getPosition(start,duration,end)[1];
  
          $(this)
            .attr({"data-start": start, "data-end": end})
            .css({"transform": "translateX("+translateX+"px)", "width": width+"px"});
        });
      }
    }
    
  }
  
  schedule.initialize();
  
  
  