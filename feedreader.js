/* feedreader.js */



$(function () {
    // Test suite for  RSS Feeds, testing the feeds
    describe('RSS Feeds', function () {

        // Checking if feeds are defined and not empty
        it('Feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Checking if url's are defined and not empty
        it('url defined', function () {
            for (let feeds of allFeeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url).not.toBe(null);

            }

        });
        // Checking if names are defined and not empty
        it('name defined', function () {
            for (let feeds of allFeeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name).not.toBe(null);

            }

        });
    });

     // Test suite for The Menu
    describe('The menu', function () {

        /* Search the class of 'menu-hidden' in the body tag.
        If true,the menu is hidden */
        it('menu is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });


        // Click events if the menu show or hide
        it('toggle menu event', function () {
            // Call the class 'menu-icon-link'
            $('.menu-icon-link').trigger('click');
            // Menu show
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // Menu hide
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Test suite that will test initial entries
        describe('Initial Entries', function () {


             // Calls a function to do an asynchronous request
            beforeEach(function (done) {
                loadFeed(0, function () {
                    done();
                });
            });
            /* Tests if the loadFeed function has at least a single '.entry' within
             the '.feed' container*/
            it('Feed has at least a single entry', function () {
                expect($('.feed .entry').length).toBeGreaterThan(0);
            });

            /* TODO: Write a new test suite named "New Feed Selection" */

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */

             // Test suite for new Feed Selection
            describe('New Feed Selection', function () {
                var oneFeed, twoFeed;
                  // Calls a function to do an asynchronous request
                beforeEach(function (done) {
                    loadFeed(1, function () {

                        oneFeed = $('.feed').html();
                        loadFeed(2, function () {
                            done();
                        });
                    });
                });
                  // Calls a function to do an asynchronous request
                afterEach(function () {
                    loadFeed(0);
                });
                 // Tests to see if two feeds are not equal
                it('checks if two feeds are different', function () {

                    twoFeed = $('.feed').html();
                    expect(oneFeed).not.toEqual(twoFeed);
                });
            });
        });
    });

}());