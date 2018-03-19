$(function(){
	var colorPallete = ['#2c3e50','#d35400','#c0392b','#e74c3c','#2980b9','#e67e22']
	for(let i = 0; i < $('.box-features').length; i++)
	{
		$('.box-features:eq('+i+')').css('background',colorPallete[i]);
	}
	
	$('.nav-item').click(function(){
		var that = $(this);
		var item = that.attr('data-item');
		$("html, body").animate({
									scrollTop: $('#'+item).offset().top 
								}, 1000);
	});
	
	$('.arrow-up').click(function(){
		$("html, body").animate({
									scrollTop: 0 
								}, 1000);
	});
	
	 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
					
	$(window).scroll(function(){
		var x = isScrolledIntoView($('#csv-menu'));
		if(x == false)
		{
			$('.fixed-nav').css('display','block');
		}
		else
		{
			$('.fixed-nav').css('display','none');
		}
		
		var nav = '';
		if($(this).scrollTop() < 100)
		{
			$('.fixed-nav').css('display','none');
		}
		
		if($(this).scrollTop() > $('#about').position().top)
		{
			$('.arrow-up').fadeIn();
		}
		else
		{
			$('.arrow-up').fadeOut();
		}
		
		if($(this).scrollTop() >= $('#about').position().top - 60)
		{
			nav = $('[data-item="about"]');
			
		}
		
		if($(this).scrollTop() >= $('#skills').position().top - 60)
		{
			nav = $('[data-item="skills"]');
			
		}
		
		if($(this).scrollTop() >= $('#education').position().top - 60)
		{
			
			nav = $('[data-item="education"]');
		}
		
		if($(this).scrollTop() >= $('#experience').position().top - 60)
		{
			
			nav = $('[data-item="experience"]');
		}
		
		if(typeof nav != 'undefined')
		{
			setActive(nav);
		}
		
	});
	loadSkillBar();
});


var object = [
				{
					'headline':'HTML',
					'value':8,
					'length':10,
					'description': "Level : Proficient"
				},
				{
					'headline':'CSS',
					'value':7,
					'length':10,
					'description': "Level : Competent"
				},
				{
					'headline':'JavaScript & jQuery',
					'value':7,
					'length':10,
					'description': "Level : Competent"
				},
				{
					'headline':'PHP',
					'value':8,
					'length':10,
					'description': 'Level : Proficient'
				},
				{
					'headline':'MySQL',
					'value':7,
					'length':10,
					'description': 'Level : Competent'
				},
				{
					'headline':'Node JS & Electron JS & Angular JS',
					'value':2,
					'length':10,
					'description': "Level : Novice"
				}

			];
function loadSkillBar()
{
	
	$("#skillset").skillset({
					object:object,
					duration:40
				});

}

function isScrolledIntoView(elem)
{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
	
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function setActive(elem)
{
	$('.nav-item').removeClass('active');
	if(elem != '')
	{
		elem.addClass('active');
	}
}