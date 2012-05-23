  $("#infoPage").live("pageshow", function(){
	  $.couch.db("asdproject").view("plugin/movies",{
            success: function(data){
                console.log(data);
                 $.each(data.rows, function(index, family){
                	var title = family.value.title;
                	var watched = family.value.watched;
                	var acquired = family.value.ratestars;
                	var slider = family.value.slider;
                	var notes = family.value.notes;
                	$("#programList").append(
                			$('<li>').append(
                				$('<a>').attr("href", "#")
                					.text(title)
                		)
                	);
                 });
                 
              $('#programList').listview('refresh');
            }
        })
        
    }); 
  
}); 
 
