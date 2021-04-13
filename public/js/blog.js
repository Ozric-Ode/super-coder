$(function() {
    $(".triangle-up").click(function() {
        var count = parseInt($("~ .text", this).text());

        var count = count + 1;
        $("~ .text", this).text(count);

    }, );
});

$(function() {
    $(".triangle-down").click(function() {
        var count = parseInt($("~ .text", this).text());

        var count = count - 1;

        $("~ .text", this).text(count);

    });
});