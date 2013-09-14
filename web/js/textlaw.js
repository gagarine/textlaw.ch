// case insensitive :contain
$.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
      .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});


$(document).ready(function() {
	
    var searchable = $('.searchable').find(".subpage");

  $('#SearchForm').on('submit',function(e){
    e.preventDefault();
  });

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
	          searchable.hide().filter(":containsi('" + searchTerm + "')").show();
	}
});

