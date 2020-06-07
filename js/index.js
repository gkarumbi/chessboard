document.addEventListener('DOMContentLoaded',function(event){
    event.preventDefault();
    //alert("Hi");

    const boardArray = [
        {
            image : "white",
            url: "/images/white.png"
        },
        {
            image: "black",
            url : "/image/black.png"
        },
        {
            image : "white",
            url: "/images/white.png"
        },
        {
            image: "black",
            url : "/image/black.png"
        },
        {
            image : "white",
            url: "/images/white.png"
        },
        {
            image: "black",
            url : "/image/black.png"
        }
        ,
        {
            image : "white",
            url: "/images/white.png"
        },
        {
            image: "black",
            url : "/image/black.png"
        }
    ];

    //Cache Dom
     newBoardArray = boardArray.map(function(board){
        return board;
    });

    const chessBoard_div = document.getElementById('chessboard');

    function drawOneLine(){
        

        for(let i = 0; i<boardArray.length; i++){
            var board = document.createElement('img');
            if(i%2==0){
                board.setAttribute('src', './images/black.png');
            }  
            chessBoard_div.appendChild(board);

            }   
    }
    function drawReversedLine(){
        for(let i=0; i<boardArray.length;i++){
            var board = document.createElement('img');
            if(i%2!==0){
                board.setAttribute('src','./images/black.png');
                
            }
            chessBoard_div.appendChild(board);
        }


    }

    function drawBoard(){
        for(let i =0; i<8; i++){
            drawOneLine();
            drawReversedLine();

        }
    }

    drawBoard();

});