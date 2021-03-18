var site_url = "http://localhost/github/sangarsh/";

var cur_date = new Date();
var cur_year = cur_date.getFullYear();

var top_menu =
  '<div class="container-fluid"> <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button><a class="navbar-brand visible-xs" href="#page-top"><img src="images/smallLogo.png" alt="" style="width:30px; margin-top:-5px;" ></a></div> <div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="socialIcon"><li> <a href="https://www.facebook.com/pages/Sangharsh-Dhol-Tasha-Pathak-Ek-Parivar/459819230829589" class="facebookIcon" target="new"></a> </li><li> <a href="https://twitter.com/sangharshpathak" class="twiterIcon" target="new"></a> </li><li> <a href="https://www.youtube.com/channel/UCkAm8mgEZZZLehP5pfLDhaA" class="YouTubeIcon" target="new"></a> </li><li> <a href="https://www.flickr.com/photos/126010569@N05/" class="flickrIcon" target="new"></a> </li></ul><ul class="nav navbar-nav"><li> <a class="main-link" href="' +
  './dhol_pathak_2019.html">Last Year Ganesh Utsav</a></li> <!--<li><a href="' +
  './registration.html">Registration 2019</a></li>--> <li><a href="' +
  './index.html">Home</a></li> <li><div class="dropdown"><a href="" data-toggle="dropdown">Dhol Pathak <span class="caret"></span></a> <ul class="dropdown-menu custom-menu" role="menu" aria-labelledby="dLabel"> <li><a href="' +
  './dhol_pathak_2013.html"> 2013 </a></li><li><a href="' +
  './dhol_pathak_2014.html"> 2014 </a></li><li><a href="' +
  './dhol_pathak_2015.html"> 2015 </a></li><li><a href="' +
  './dhol_pathak_2016.html"> 2016 </a></li><li><a href="' +
  './dhol_pathak_2017.html"> 2017 </a></li><li><a href="' +
  './dhol_pathak_2018.html"> 2018 </a></li><li><a href="' +
  './dhol_pathak_2019.html"> 2019 </a></li><li><a href="' +
  './dhol_pathak_2020.html"> 2020 </a></li></ul></div></li> <li><div class="dropdown"><a href="" data-toggle="dropdown">Activities <span class="caret"></span></a> <ul class="dropdown-menu custom-menu" role="menu" aria-labelledby="dLabel"> <li><a href="' +
  './social_activities.html"> Social Activities </a></li> <li><a href="' +
  './treks.html"> Treks </a></li> <li><a href="'+
  './yuva.html"> युवा उद्योजक </a></li> <li><a href="'+
  './treeplantation.html"> वृक्षारोपण अणि संवर्धन </a></li> <li><a href="'+
  './letter_to_pm.html"> Letter to Prime Minister </a></li> <li><a href="'+
  './blood_donation_in_covid.html"> Blood Donation in Covid </a></li> <li><a href="'+
  './rakshabandhan.html"> Raksha Bandhan </a></li> <li><a href="'+
  './notebook_distribution.html"> Book Donation </a></li></li></ul> </div></li><li><a href="' +
  './member_stories.html">Member Stories</a> </li><li> <a href="' +
  './news.html">Sangharsh in News</a> </li><li> <a href="' +
  './practice.html">Practice Session & धमाल</a></li><li> <a href="' +
  './blog.html">Blog</a></li>'+
  '<li><a href="./quarantinevaadan.html"> Quarantine Vadan </a></li></ul></div>';

var bottom_menu =
  '<div class="container"><div class="row"><div class="col-sm-12"><ul ><li> <a href="' +
  './index.html">Home</a> </li><li> <a href="' +
  './dhol_pathak_2018.html">Dhol Pathak</a> </li><li> <a href="' +
  './social_activities.html">Social Activites</a> </li><li> <a href="' +
  './member_stories.html">Member Stories</a> </li><li> <a href="' +
  './news.html">Sangharsh in News</a> </li></ul></div></div><div class="row marginTop3p"><div class="col-sm-12">Copyright ' +
  cur_year +
  " @ Navchetana Charitable Trust</div></div></div>";

$("#top_menu").html();
$("#top_menu").html(top_menu);

$("#bottom_menu").html();
$("#bottom_menu").html(bottom_menu);

$(".socialIcon li").css("margin-left", "4px");

{
  /* <li> <a href="'+site_url+'/feedback.html">Feedback</a> </li>
<li> <a href="' +
 
  '/feedback.html">Send Feedback</a> </li> */
}
