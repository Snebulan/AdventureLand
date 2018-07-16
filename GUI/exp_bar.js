//Shamelessly rewritten from https://raw.githubusercontent.com/Spadar/AdventureLand/master/GUI/DPSMeter.js
//Original Base for GUI Layout From: https://github.com/JourneyOver/Adventure_Land_Codes/blob/master/Code%20Snippits/GUI%20Additions/Estimated%20Time%20Until%20Level%20Up%20GUI.js
init_xpbar();

setInterval(function() {
  updateXpBar();
}, 100);

function init_xpbar() {
  let $ = parent.$;
  let mpb = $('#mpbar');

  mpb.parent().find('#expbar').remove();

  let expbar_container = $('<div id="expbar"></div>').css({
    background:'black',
    padding: '2px',
    width: '100%',
    border: '4px solid gray',
    'margin-left': '-4px',
    position: 'relative',
  });
	
  let expslider = $('<div id="expbarslider"></div>')
    .css({
		background: 'rgb(153, 0, 204)',
		width: character.xp/character.max_xp*100+'%',
		height: '30px',
    })
    .html("")
    .appendTo(expbar_container);
	
  let exptext = $('<div id="exptext"></div>')
    .css({
		position: 'absolute',
		width: '100%',
		top: '2px',
		left: '0px',
		height: '30px',
		'vertical-align': 'middle',
		'line-height': '30px',
		'text-align': 'center',
		'font-size': '30px',
    })
    .html(character.xp+"/"+character.max_xp)
    .appendTo(expbar_container);

  mpb.after(expbar_container);
}

function updateXpBar()
{
	let $ = parent.$;
	$('#expbarslider').css({width:character.xp/character.max_xp*100+'%'});
	$('#exptext').html(character.xp+"/"+character.max_xp);
}