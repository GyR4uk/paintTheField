window.onload = function() {
    var boxGames = document.querySelector('.boxGames');
    const color = ["#d1ce00bb", //жёлтый
        "#d13100bb", //красный
        "#0050d1bb", //синий
        "#b900d1bb", //фиолетовый
        "#00d134bb", //зелёный
        "#00cad1bb" //берюзовый
    ];


    //задача рандомного цвета
    function randomColor() {
        let random = Math.floor(Math.random() * 6);
        return color[random];
    }

    function init() {
        for (let i = 0; i < 256; i++) {
            quadrate = document.createElement('div');
            quadrate.className = 'quadrate'
            quadrate.style.backgroundColor = randomColor();
            boxGames.appendChild(quadrate);
        }
    }




    init();
}