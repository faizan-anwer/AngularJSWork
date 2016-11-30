var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        $stateProvider

		// HOME STATES AND NESTED VIEWS ========================================
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})

		// nested list with custom controller
		.state('home.list', {
			url: '/list',
			templateUrl: 'partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
			}
		})

		// nested list with just some random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'I could sure use a drink right now.'
		})

        .state('contact', {
			url: '/contact',
			templateUrl: 'partial-contact.html'
		})
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            //templateUrl: 'partial-about.html'
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller 
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                   // template: 'List of about page'
                }
            }
            
            
        
    })
        .state('navigation', {
			url: '/navigation',
			templateUrl: 'partial-nav.html'
		})
        .state('search', {
			url: '/search',
			templateUrl: 'partial-search.html'
		})
        .state('directive', {
			url: '/directive',
			templateUrl: 'partial-directive.html'
		});
   

        
});
