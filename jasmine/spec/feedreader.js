/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test to check that each feed has a url */
         it('have a URL', function(){
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
         });


        /* Test to check that each feed has a name */
         it('have a name', function(){
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
         });
    });


    /* New suite for test on the menu */
    describe('The menu', function(){
       /* Test to make sure that the menu is hidden to begin with */ 
         it('hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         })

        /* Tests that the menu is displayed when clicked and then hidden when clicked on again */
          it('displays when clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          })
     });
        

         

    /* New suite for testing the initial feed entries */
    describe('Initial Entries', function(){
        /* Tests to check that at least one entry is loaded initially */
         beforeEach(function(done){
            loadFeed(0, done);
            // done();
         });

         it('should have at least one entry', function(){
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            // done();
         });
    });
    /* Suite to test that selecting a new feed works */
    describe('New Feed Selection', function(){
       /* Test to make sure the content on the page has changed */ 
        let firstFeed = '';
        let secondFeed = '';

         beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed = $('.entry').text();
            });
            loadFeed(1, function(){
                secondFeed = $('.entry').text();
                done();
            });
         });

         it('should change the content', function(){
            expect(firstFeed === secondFeed).toBe(false);
         });
     });

}());
