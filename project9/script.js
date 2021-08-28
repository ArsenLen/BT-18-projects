$(document).ready(function () {

    let x = $(document).width(); //1366
    let y = $(document).height();// 625

    $(".shape").on("click", function () {
        let randomPosX = Math.round(Math.random() * x); // [0:1], 0.99 * 1366
        let randomPosY = Math.round(Math.random() * y); // [0:1], 0.99 * 625
        $(this).css({
            "top" : randomPosY,
            "left" : randomPosX
        })
    })

})

// $(elem).css("cssProp", "cssValue");
// $(elem).css("bg-color", "darksalmon");
// $(elem).css("position", "abs, rel, sticky....")

// $(this).css("top", "200px")
// $(this).css({"cssProp" : "cssValue", "cssProp": "cssValue"})
// Как переместить наш шэйп на 200пх сверху и слева

// Как перемещать наш шэйп на случайное положение
// Как получить рандомное число: randomPos = Math.round(Math.random() * 50)
//

