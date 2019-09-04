$(document).ready(function () {

    var birdSongs = [
        {
            birdName: "Barn Swallow",
            songName: "audio/Barn_Swallow.mp4",
            id: "bsw"
        },
        {
            birdName: "Common Cuckoo",
            songName: "audio/Common_Cuckoo.mp4",
            id: "ccuck"
        },
        {
            birdName: "Great Titmouse",
            songName: "audio/Great_Titmouse.mp4",
            id: "grtit"
        }

    ]

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    
    shuffle(birdSongs);
    console.log(birdSongs);

    var numberOfSong = 0;

    var divTimer = document.getElementsByClassName('timer')[0],
        seconds = 0,
        minutes = 0,
        t;

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        divTimer.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);

    }

    function getTimerValue() {
        return divTimer.textContent;
    }
    timer();
    changeSong();
    var birds = [];
    var guessRight = 0;
    $('.game-content').find('div.bird-card').each(function (i) {

        var $this = $(this);
        birds.push($this);
        var answerValue = $this.data('target');
        var $target = $('.birds-wrappper .bird-img[data-accept="' + answerValue + '"]');
        var labelText = $this.html();
        $this.draggable({
            revert: "invalid",
            containment: ".game-content",
            drag: function (event, ui) {
                hideErrorMessage();
            },
            start: function () {
                $(this).data("startPosition_top", $(this).css('top'));
                $(this).data("startPosition_left", $(this).css('left'));
            }
        });

        if ($target.length > 0) {
            $target.droppable({
                accept: 'div.bird-card[data-target="' + answerValue + '"]',
                drop: function (event, ui) {

                    if (checkAnswersWithSong(this, $this, numberOfSong)) {
                        guessRight += 1;
                        $this.draggable('destroy');
                        $target.droppable('destroy');
                        successCardColor($this);
                        showColorImg(this, $this);
                        checkEndOfGame();
                        changeSong();
                    } else {
                        showErrorMessage($this);
                        successCardColor($this);
                        setTimeout(function () {
                            defaultCardColor($this);
                            var card_top = ui.draggable.data().startPosition_top;
                            var card_left = ui.draggable.data().startPosition_left;
                            ui.draggable.css({
                                top: card_top,
                                left: card_left
                            });
                            return;
                        }, 1500);

                    }
                }
            });

        } else {}

    });

    function checkEndOfGame() {
        if (birds.length == guessRight) {
            var timerValue = getTimerValue();
            localStorage.setItem("timerValue", timerValue);
            setTimeout(function () {
                window.location.href = "result.html";
            }, 700);
        }
    }

    function showColorImg(element, card) {
        var $element = $(element);
        var imageName = $element.data('img');
        var colorImage = 'url(images/' + imageName + '_color.png)';
        setTimeout(function () {
            $element.css('background-image', colorImage);
            card.hide();
        }, 500);

    }

    function playBirdSong(element) {
        var a = element.data('target');
        var b = $('audio[data-audio="' + a + '"] ');
        b.trigger('play');
        b.trigger('pause');
    }

    function changeSong() {
        var audio = $("#bird-player");
        if (birdSongs.length != numberOfSong) {
            var sourceUrl = birdSongs[numberOfSong].songName;
            $("#src-song").attr("src", sourceUrl);
            audio.trigger('load');
            audio.trigger('play');
            numberOfSong++;
        } else {
            audio.trigger('pause');
        }
    }

    function checkAnswersWithSong(img, card, songNumber) {
        img_id = $(img).data('accept');
        card_id = card.data('target');
        song_id = birdSongs[songNumber - 1].id;
        return (img_id == song_id) && (card_id == song_id);
    }

    function showErrorMessage(birdCard) {
        var birdName = birdCard.text();
        $("#birdName").text(birdName);
        $('#msg_info').hide();
        $('#msg_error').show();

    }

    function hideErrorMessage() {
        $('#msg_info').show();
        $('#msg_error').hide();
    }

    function successCardColor(card) {
        card.css({
            'background': '#5FB27B',
            'color': '#11423B'
        });
    }

    function defaultCardColor(card) {
        card.css({
            'background': '#fff',
            'color': '#3F3B3B'
        });
    }


});