"use strict";angular.module("showcaseApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/l-evenement",{templateUrl:"views/evenement.html",controller:"EvenementCtrl",controllerAs:"Evenement"}).when("/la-saison",{templateUrl:"views/saison.html",controller:"SaisonCtrl",controllerAs:"Saison"}).when("/la-compagnie",{templateUrl:"views/compagnie.html",controller:"CompagnieCtrl",controllerAs:"Compagnie"}).when("/les-creations",{templateUrl:"views/creation.html",controller:"CreationCtrl",controllerAs:"Creation"}).when("/creation-spectacles-jeunes",{templateUrl:"views/jeune.html",controller:"JeuneCtrl",controllerAs:"Jeune"}).when("/creation-spectacles-adultes",{templateUrl:"views/adulte.html",controller:"AdulteCtrl",controllerAs:"Adulte"}).otherwise({redirectTo:"/"})}]),angular.module("showcaseApp").controller("HomeCtrl",["$scope","$location","$anchorScroll","shared",function(a,b,c,d){d.setSection("home"),a.gotoTop=function(){b.hash("top"),c()}}]),angular.module("showcaseApp").controller("ngHeaderCtrl",["$scope","shared",function(a,b){a.enableLink=function(a){return a===b.getSection()}}]).directive("ngHeader",function(){return{templateUrl:"views/header.html",controller:"ngHeaderCtrl",restrict:"A"}}),angular.module("showcaseApp").controller("ngFooterCtrl",["$anchorScroll","$location","$scope",function(a,b,c){var d=new Date,e=d.getFullYear();c.myYear=e,c.gotoTop=function(){b.hash("top"),a()}}]).directive("ngFooter",function(){return{templateUrl:"views/footer.html",controller:"ngFooterCtrl",restrict:"A"}}),angular.module("showcaseApp").controller("SaisonCtrl",["shared",function(a){a.setSection("season")}]),angular.module("showcaseApp").factory("shared",function(){var a="home";return{setSection:function(b){a=b},getSection:function(){return a}}}),angular.module("showcaseApp").controller("EvenementCtrl",["shared",function(a){a.setSection("event")}]),angular.module("showcaseApp").controller("CompagnieCtrl",["shared",function(a){a.setSection("company")}]),angular.module("showcaseApp").controller("CreationCtrl",["shared",function(a){a.setSection("creation")}]),angular.module("showcaseApp").controller("AdulteCtrl",["shared",function(a){a.setSection("nothing")}]),angular.module("showcaseApp").controller("JeuneCtrl",["shared",function(a){a.setSection("nothing")}]),angular.module("showcaseApp").run(["$templateCache",function(a){a.put("views/adulte.html",'<h1>Les spectacles des adultes de la Compagnie du Ressort</h1> <div class="row"> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/Jacquesou.10bd77d3.jpg" alt="jacques ou la soumission, Eugène IONESCO"> <div class="caption"> <h3 class="text-capitalize">jacques ou la soumission</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p> <button class="btn btn-primary">Button</button> <button class="btn btn-danger">Button</button> </p> </div> </div> </div> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/Jacquesou.10bd77d3.jpg" alt="jacques ou la soumission, Eugène IONESCO"> <div class="caption"> <h3 class="text-capitalize">jacques ou la soumission</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p> <button class="btn btn-primary">Button</button> <button class="btn btn-danger">Button</button> </p> </div> </div> </div> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/Jacquesou.10bd77d3.jpg" alt="jacques ou la soumission, Eugène IONESCO"> <div class="caption"> <h3 class="text-capitalize">jacques ou la soumission</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p> <button class="btn btn-primary">Button</button> <button class="btn btn-danger">Button</button> </p> </div> </div> </div> </div>'),a.put("views/compagnie.html","<blockquote> <p>Le théâtre est un jeu. Le jeu est un plaisir. Le théâtre est un plaisir</p> </blockquote> <h1>La méthode, les objectifs</h1> <p class=\"lead\"> La Compagnie du Ressort offre plus qu'une activité de loisir : elle propose un lieu privilégié d'expression, de culture, de connaissance des Arts... </p> <h2>C'est quoi la méthode?</h2> <p class=\"text-justify\"> Le projet de spectacle, et l'important travail de préparation qu'il nécessite, apporte aux comédiens l'expérience concrète de l'aboutissement d'un projet artistique commun. <br> <br> Le thème de l'année est un fil conducteur pour aborder le travail d'atelier, un guide pour déambuler de conférences en séances de visionnage de films, un prétexte pour visiter des expositions et voir des pièces de théâtre, un sujet pour participer à des ateliers de perfectionnement et des stages... </p>"),a.put("views/creation.html","<blockquote> <p>Un théâtre militant des spectacles originaux</p> </blockquote> <h1>Des mises en scène précises et foisonnantes<br>au service du théâtre contemporain</h1> <p class=\"text-justify\"> La troupe compte à son répertoire plus de 15 créations théâtrales co-écrites par ODRI K. et Didier LE GRALL. <br> La Compagnie est résolument tournée vers la mise en scène de textes d’auteurs modernes ou contemporains... français et étrangers. <br> <br> Les thèmes sont inspirés par le quotidien, l’absurde, la révolte. Les spectacles, à la fois graves et divertissants, engagés et drôles, nous parlent de liberté, fustigent l’ordre établi et les obligations sociales, bousculent ceux qui se laissent envahir par la torpeur du quotidien. <br> <br> Les mises en scène font la part belle au mouvement et au dynamisme des scènes de groupe. Leur rythme endiablé ne laisse aucun répit au spectateur qui sort de ces aventures essoufflé et émerveillé... </p> <h1>Création</h1> <p> La création est l'opposé de l'abolition, l'anéantissement, la destrution, le néant... et les artistes, imprégnés de sensations fortes, se doivent de proposer un regard sur le monde. Parce que le théâtre est vivant, nos textes traitent souvent, par le biais de la comédie, des sujets en phase avec l'actualité sociale, politique... Nos auteurs, unis dans un rejet des a priori, suscitent un intérêt auprès du public, pour peu que le propos soit clair et que la mise en scène permette son appréciation tant par les initiés que par les non-initiés. </p>"),a.put("views/evenement.html","<blockquote> <p>L'art est l'outil privilégié d'une transformation individuelle profonde et durable.</p> </blockquote> <h1>Saison 2015-2016</h1> <p class=\"lead\"> Grande guerre et petits tracas <br> Histoire de temps <br> extrait de \"La ceinture de l'ogresse\" <br> de Rachid Mimouni </p> <h1>Présentation d'automne</h1> <p class=\"lead\">Mercredi 11 Novembre 2015 - 18h00</p> <p class=\"text-justify\"> Quelques séances pour présenter un travail! <br> Un texte non dialogué pour créer un évènement collectif. Il s'agit d'une Nouvelle littéraire, une narration dite à plusieurs voix… celles des comédiens de la troupe qui, ensemble, sur la scène, se meuvent, s'émeuvent et racontent... <br> Chaque groupe (enfant, ado, adulte) se saisit d'un court chapitre de l'œuvre et c'est la réunion de l'équipe complète qui donne lieu à la restitution de l'histoire, devant un public intime constitué des parents les plus proches des élèves (ceux qui vivent sous le même toit). <br> 20 minutes de plaisir partagé, les premiers pas de la saison. Un buffet, agrémenté par nos convives, est l'opportunité de faire connaissance, de discuter, de se rencontrer. Cet instant chaleureux et propice aux échanges, clôture cette plaisante soirée. </p>"),a.put("views/footer.html",'<div id="footer" class="container"> <div class="col-xs-12 col-md-10 col-md-offset-1"> <hr> <p class="pull-right hidden-xs"><a href="" ng-click="gotoTop()">Retour en haut</a></p> <p class="visible-xs"><a href="" ng-click="gotoTop()">Retour en haut</a></p> <p>&copy; {{ myYear }} Compagnie du Ressort. Tous droits réservés.</p> <!--<p>Nous Contacter : <a href="tel:+33950228295">09.50.22.82.95</a> / <a href="mailto:contact@compagnieduressort.fr">contact@compagnieduressort.fr</a></p>--> </div> </div>'),a.put("views/header.html",'<div class="navbar-wrapper" id="top"> <div class="container"> <div class="row"> <div class="col-xs-12 col-md-10 col-md-offset-1"> <div class="navbar navbar-inverse" role="navigation"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand hidden-sm hidden-md" href="#/">Compagnie du Ressort</a> </div> <div class="collapse navbar-collapse" id="bs-navbar-collapse"> <ul class="nav navbar-nav"> <li ng-class="{active : enableLink(\'home\')}"> <a ng-href="#/">Accueil</a> </li> <li ng-class="{active : enableLink(\'event\')}"> <a ng-href="#/l-evenement">L\'Évènement</a> </li> <li ng-class="{active : enableLink(\'season\')}"> <a ng-href="#/la-saison">La Saison</a> </li> <li ng-class="{active : enableLink(\'company\')}"> <a ng-href="#/la-compagnie">La Compagnie</a> </li> <li ng-class="{active : enableLink(\'creation\')}"> <a ng-href="#/les-creations">Les Créations</a> </li> </ul> <ul class="nav navbar-nav navbar-right" id="bs-navbar-collapse"> <li class="dropdown"> <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plus <span class="caret"></span></a> <ul class="dropdown-menu"> <li class="dropdown-header">Création Spectacle</li> <li><a href="#/creation-spectacles-jeunes">Jeunes</a></li> <li><a href="#/creation-spectacles-adultes">Adultes</a></li> </ul> </li> </ul> </div> </div> </div> <img id="img-reception" src="images/logo.9a298fdc.png" class="img-responsive center-block" alt="La Compagnie Du Ressort"> </div> </div> </div> </div>'),a.put("views/home.html",'<div class="row"> <div class="col-md-7"> <h2 class="text-uppercase">Avis aux amateurs !!!</h2> <p class="lead"> <span class="text-uppercase">La Compagnie du Ressort</span> est une association, loi 1901, créée en janvier 1994, à Paris et dans les Hauts-de-Seine, afin que des acteurs amateurs aient la possibilité de s\'exprimer au théâtre, grâce à l\'art du jeu, et dans une atmosphère convivale... quelque soit leur âge. </p> </div> <div class="col-md-5"> <img class="img-responsive center-block img-circle" src="images/ubu2.769f3846.jpg" alt="Image de présentation"> </div> </div> <hr> <div class="row"> <div class="col-md-7 col-md-push-5"> <h2>Des professionnels du spectacle créent pour des amateurs passionnés.<span class="text-muted"> Enfants. Ados. Adultes.</span></h2> <p class="lead"> Nous faisons appel à des professionnels du spectacle dont ODRI K. (auteur, metteur en scène, comédienne, professeur de théâtre) qui apportent leur expérience aux élèves et les amènent, par des moyens ludiques, culturels et peu conventionnels, à la création de spectacles de qualité dont ils sont les acteurs. </p> </div> <div class="col-md-5 col-md-pull-7"> <img class="img-responsive center-block img-circle" src="images/chaudshow2007.98121b41.jpg" alt="Image de présentation"> </div> </div> <hr> <div class="row"> <div class="col-md-7"> <h2>Création de spectacles. <span class="text-muted">Formation de l\'acteur.</span></h2> <p class="lead"> Notre but est artistique tout autant que pédagogique. Quels que soient nos projets (cours, stages, ateliers, auditions d\'élèves, exhibitions événementielles, créations de spectacles...), notre premier souci est la qualité. </p> </div> <div class="col-md-5"> <img class="img-responsive center-block img-circle" src="images/activites.0390c29c.jpg" alt="Image de présentation"> </div> </div> <hr> <div class="row"> <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0"> <img class="img-circle center-block" src="images/broadway.6015b8cd.jpg" alt="Image de redirection" width="140" height="140"> <h2 class="text-center">Nous contacter</h2> <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p class="text-center"> <a class="btn btn-default" href="#/l-evenement" role="button" ng-click="gotoTop()">Avoir des détails &raquo;</a> </p> </div> <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0"> <img class="img-circle center-block" src="images/broadway.6015b8cd.jpg" alt="Image de redirection" width="140" height="140"> <h2 class="text-center">Création de spectacles</h2> <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p class="text-center"> <a class="btn btn-default" href="#/la-saison" role="button" ng-click="gotoTop()">Avoir des détails &raquo;</a> </p> </div> <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0"> <img class="img-circle center-block" src="images/broadway.6015b8cd.jpg" alt="Image de redirection" width="140" height="140"> <h2 class="text-center">Formation de l\'acteur</h2> <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> <p class="text-center"> <a class="btn btn-default" href="#/la-compagnie" role="button" ng-click="gotoTop()">Avoir des détails &raquo;</a> </p> </div> </div>'),a.put("views/jeune.html",'<h1>Les spectacles des jeunes de la compagnie...</h1> <h2>Si petits, si mignons !</h2> <p> <img src="images/sipetits.f87bdab2.jpg" class="img-responsive img-thumbnail center-block" alt="Si petits, si mignons !, Odri K. et Didier LE GRALL"> </p> <p class="text-justify"> <span class="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. </span> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. </p>'),a.put("views/saison.html",'<blockquote> <p>La compagnie du ressort : des jeunes de 8 à 88 ans.</p> </blockquote> <blockquote class="blockquote-reverse"> <p>La compagnie du ressort : une passerelle entre les Curieux et la Culture.</p> </blockquote> <div class="row"> <div class="col-xs-12 col-sm-8"> <h1>Année 2015-2016</h1> <p class="text-justify"> <strong>Chers Compagnons du Ressort</strong>, <br> <br> Cette 22<sup>ème</sup> saison sera encore l\'occasion d\'une déambulation créative, théâtrale et culturelle. Cette année encore, nos aventures artistiques graviteront autour d\'un thème: <strong><i>Grande guerre et Petit tracas</i></strong>... tout un programme, qui, espérons-le, nous enseignera, nous grandira ! <br> <br> Vouée à créer la rencontre entre initiés et non-initiés, l\'opportunité d\'un dialogue entre deux populations habitées par une même passion, la Compagnie du Ressort est une troupe de comédiens amateurs passionnés encadrés par des professionnels concernés. C\'est pour défendre cette idée que des intermittents du spectacle s\'engagent, chaque année, en donnant la parole à ceux qui aiment le théâtre, en les formant au jeu d\'acteur, en aiguisant leur regard de spectateur et en leur proposant des conditions de travail au plus près des exigences professionnelles du milieu artistique. </p> </div> <div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0"> <img src="images/Odri.ffaf1940.jpg" class="img-responsive center-block img-rounded" alt="La compagnie du ressort - ODRI K." title="La compagnie du ressort - ODRI K."> </div> </div> <div class="row"> <div class="col-xs-12 col-sm-6"> <h1>Horaires</h1> <div class="panel panel-default"> <div class="panel-heading">Enfants : de 8 à 11 ans</div> <div class="panel-body"> mardi : de 18h15 à 20h15 </div> </div> <div class="panel panel-default"> <div class="panel-heading">Pré-ados : de 12 à 16 ans</div> <div class="panel-body"> mercredi : de 17h00 à 19h00 </div> </div> <div class="panel panel-default"> <div class="panel-heading">Adolescents : de 17 à 22 ans</div> <div class="panel-body"> mercredi : de 19h00 à 21h00 </div> </div> <div class="panel panel-default"> <div class="panel-heading">Adultes</div> <div class="panel-body"> mardi : de 20h30 à 23h00 </div> </div> </div> <div class="col-xs-12 col-sm-6"> <h1>Tarifs</h1> <div class="panel panel-default"> <div class="panel-heading">Cotisation par session</div> <div class="panel-body"> session 1: septembre à février <br> session 2: mars à juin </div> </div> <div class="panel panel-default"> <div class="panel-heading">Enfants / Pré-ados</div> <div class="panel-body"> 25 kilos </div> </div> <div class="panel panel-default"> <div class="panel-heading">Adolescents / Adultes</div> <div class="panel-body"> 28 kilos </div> </div> </div> </div> <p>Les lundis : séances de perfectionnement et d\'action culturelle.</p>')}]);