// jquery

$(function() {
    let bg = $("#bg");
    // console.log(bg);
    let bgNum = 0;

    const intervelBg = setInterval(function() {
        //i have 16 images
        bgNum = (bgNum % 15) + 1;
        // dev
        // bg.css('background', `url(${bgNum}.jpg)`);
        bg.css('background', `url(http://khanhnoi.mobie.in/demo/marvel-intro/${bgNum}.jpg)`);

    }, 300)

    setTimeout(function() {
        clearInterval(intervelBg);
    }, 8000);
    // animation: hideBg 8s ease 0s infinite;
})