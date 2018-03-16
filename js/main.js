$(function(){
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
		
		if($(this).scrollTop() >= $('#about').position().top - 50)
		{
			nav = $('[data-item="about"]');
			
		}
		
		if($(this).scrollTop() >= $('#skills').position().top - 50)
		{
			nav = $('[data-item="skills"]');
			
		}
		
		if($(this).scrollTop() >= $('#education').position().top - 50)
		{
			
			nav = $('[data-item="education"]');
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
					'value':7,
					'length':10,
					'description': 'Some text here'
				},
				{
					'headline':'CSS',
					'value':6,
					'length':10,
					'description': 'Some text here'
				},
				{
					'headline':'JavaScript & jQuery',
					'value':7,
					'length':10,
					'description': 'Some text here'
				},
				{
					'headline':'PHP',
					'value':8,
					'length':10,
					'description': 'Some text here'
				},
				{
					'headline':'MySQL',
					'value':7,
					'length':10,
					'description': 'Some text here'
				},
				{
					'headline':'Node JS & Electron JS & Angular JS',
					'value':1,
					'length':10,
					'description': 'Some text here'
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