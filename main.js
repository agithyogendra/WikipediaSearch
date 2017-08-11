var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
$(document).ready(function(){
	/*Hide search box, submit button*/
	$("#page").hide();
	$("#submit").hide();
	/*Toggle between first page and second page*/
	var searchIcon = true;
	/*First page to Second page*/
	$("#search").on("click", function(){
		if(searchIcon === true){
			$("#submit").show();
			$("body").css({
			"background-color" : "#ff5252", 
			});
			$("#page").show();
			$("#search").removeClass("fa-search");
			$("#search").addClass("fa-times-circle");
			$("#random").hide();
			$("#search-text").hide();
			searchIcon = false;
		}/*Second page to First page*/
		else{
			$("body").css({
			"background-color" : "white" 
			});
			$("#search").removeClass("fa-times-circle");
			$("#search").addClass("fa-search");
			searchIcon = true;
			$("#page").hide();
			$("#submit").hide();
			$("#list").html("");
			$("#random").show();
			$("#search-text").show();
			/*Reset search box*/
			document.getElementById("page").value = "";
		}
	});
	/*Display Wikipedia results when submitt button is pressed*/
	$("#submit").on("click", function(){
		 $('.collapsible').collapsible();
		var x = document.getElementById("page").value;
		$.ajax({
			url: api + x + "&limit=10&namespace=0&format=json&origin=*",
			dataType: "json",
			success:function(response){
				$("#list").html("");
				for(var i = 0; i < response[1].length; i++){
					$("#list").append("<li><div class=collapsible-header><a href =" + response[3][i]  + " target=_blank><i class = \"fa fa-external-link\" aria-hidden=\"true\"></i></a>" + response[1][i] + 
						"</div><div class = collapsible-body><span>" + response[2][i] + "</span></div></li>");
				}
			}
		});
	});

	

	

});
