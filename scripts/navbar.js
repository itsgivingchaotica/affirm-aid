$(function () {
    $("#navbar-placeholder").load("./components/navbar.html", function () {
        // Update the href values based on the current page
        var currentPagePath = window.location.pathname;

        $(".logo").attr("href", "index.html"); 
        $(".about-btn").attr("href", "pages/about.html"); 
        $(".donate-btn").attr("href", "pages/donate.html"); 
    });
});