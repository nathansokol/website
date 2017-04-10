$(document).ready(function() {

	$("#workshopMoreExamples").click(function() {
	    $('#workshopMoreExamples').magnificPopup({
		    items: [
		      {
		        src: 'images/camping2015.png'
		      },
		      {
		        src: 'images/prototype1.png'
		      },
		      {
		        src: 'images/beers.png'
		      },
		      {	      
		        src: 'images/justan1.png'
		      },
		      {
		        src: 'images/metrom1.png'
		      },
		      {
		        src: 'images/sonic.png'
		      }

		    ],
		    gallery: {
		      enabled: true,
		      preload: [0,3],
		      navigateByImgClick: true
		    },
		    type: 'image' // this is default type
		});
	});

	$(".jobTitle").click(function() {
	  $(this).next('div').toggle('slow');
	});

	$("#workshopProject1").click(function() {
	  window.location = "lib/project_dgextreme/project_dgextreme.html";
	});
	$("#workshopProject2").click(function() {
	  window.location = "lib/project_qt/qt_home.html";
	});
	$("#workshopProject3").click(function() {
	  window.location = "http://www.mtpweekend.com";
	});
	$("#workshopProject4").click(function() {
	  window.location = "http://www.mtpweekend.com/halfmarathon";
	});
});
