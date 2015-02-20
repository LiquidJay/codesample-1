//SAMPLE DEMO purposes only
$("#price-level-wrapper").hide();
//------------------------------

$("#price-dropdown").change(function(e){
	var levelSelected = this.options[this.options.selectedIndex].value;
	e.stopImmediatePropagation();
	//fire custom event on drop down change
	$(this).trigger("change.pricing", levelSelected);
});

$("#price-dropdown").bind("change.pricing", function(ev, levelSelected){
	//Display the price level choice to use
	if(levelSelected != undefined && levelSelected != ""){
		$("#level-txt").html("by " + levelSelected + " Level");
	}
});

$("#price-dropdown").bind("change.pricing", function(ev, levelSelected){
	//Display the price fields to user
	
	//SAMPLE DEMO PURPOSES ONLY
	if( (levelSelected).toLowerCase() == "product"){
		$("#price-level-wrapper").show();
	}
	else
		$("#price-level-wrapper").hide();
});
