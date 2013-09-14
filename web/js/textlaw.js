
$(document).ready(function() {
	
    var searchable = $('.searchable').find(".subpage");

	$('#searchInput').on( "keyup", function(){
		var searchTerm = $(this).val();
		console.log(searchTerm);
		if(searchTerm.length > 2){
			//searchable.hide();
      searchable.unhighlight();
      searchable.highlight(searchTerm);
			searchFunction(searchable, searchTerm);
		}else{
      searchable.unhighlight();
      searchable.show();
		}
	});

	function searchFunction(searchable, searchTerm) {
	          searchable.hide().filter(":contains('" + searchTerm + "')").show(); 
	}
});

