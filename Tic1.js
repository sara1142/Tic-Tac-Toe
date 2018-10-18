function mypage1() {
    location.replace("./Tic1.html")
}


function mypage11() {
    location.replace("./index.html")
}



$(document).ready(function () {
    var move = 1;
    var play = true;


    $("#board tr td").click(function () {
        if ($(this).text() == "" && play) {
            if ((move % 2) == 1) { $(this).text("X"); }
            else { $(this).text("O"); }
            move++;


            if ((checkWinner() != -1) && (checkWinner() != "")) {
                // debugger;
                if (checkWinner() === "X") {
                    swal(" ", "Player X", 'images/win.png');
                } else { swal(" ", "Player O", 'images/win.png'); }
                play = false;
            } else if (move == 10) {
                swal(" ", "Tie X and O", 'images/Tie1.png');
            }

        }

    });

    function checkWinner() {

        var s1 = $('#1').text();
        var s2 = $('#2').text();
        var s3 = $('#3').text();
        var s4 = $('#4').text();
        var s5 = $('#5').text();
        var s6 = $('#6').text();
        var s7 = $('#7').text();
        var s8 = $('#8').text();
        var s9 = $('#9').text();


        if ((s1 == s2) && (s2 == s3)) {
            // debugger;
            return s3;
        }
        else if ((s4 == s5) && (s5 == s6)) {
            return s6;
        }
        else if ((s7 == s8) && (s8 == s9)) {
            return s9;
        }

        else if ((s1 == s4) && (s4 == s7)) {
            return s7;
        }
        else if ((s2 == s5) && (s5 == s8)) {
            return s8;
        }
        else if ((s3 == s6) && (s6 == s9)) {
            return s9;
        }

        else if ((s1 == s5) && (s5 == s9)) {
            return s9;
        }
        else if ((s3 == s5) && (s5 == s7)) {
            return s7;
        }

        return -1;
    }
});