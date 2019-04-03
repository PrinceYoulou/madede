let interval;
let timer = 15;
let score = 0;
let cursor = 0;
let questions = shuffle(data).slice(0, 10);
let recap = [];

console.log("SCORE " + localStorage.getItem("score"))

buildQuestions(questions[cursor]);
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildQuestions(data) {
    interval = setInterval(initTimer, 1000);
    $(".questionTitle").text(data.text);
    $(".questionProgress").text(`Question ${cursor + 1}`);
    data.answers.forEach((element, index) => {
        $(".content-suggestions").append(`<li class="list-group-item suggestion${index + 1}" data-correct="${element.correct}" data-comment="${element.comment}">${element.text}</li>`);
        $(`.suggestion${index + 1}`).click(function (e) {
            let correct = $(this).attr("data-correct");
            if (correct.indexOf("true") == 0) {
                score += timer;
                $(".score").text(score);
                $(this).css("color", "green")
            } else {
                $(this).css("color", "red")
            }
            clearInterval(interval);
            //before increment cusor
            recap.push({ comment: $(this).attr("data-comment"), response: $(this).text(), question: $(".questionProgress").text(), questionContent: $(".questionTitle").text() });
            reBuildUi();
        });
    });
}

function reBuildUi() {
    clearInterval(interval);
    setTimeout(function () {
        timer = 15;
        if (cursor != 10)
            cursor++;
        if (cursor != 10) {
            $(".content-suggestions").remove();
            $(".contentQuiz").append('<ul class="list-group list-group-flush content-suggestions"></ul>');
            buildQuestions(questions[cursor]);
        } else {

            clearInterval(interval);
            if (parseInt(localStorage.getItem("score")) === NaN
                || typeof (parseInt(localStorage.getItem("score"))) == NaN) {
                localStorage.setItem("score", score);
            } else {
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + score);
            }
            $(".content-action").append('<button class="restart btn btn-sm btn-primary" style="background-color:#003718;border-color:#003718">rejouer</button>');
            $(".content-action").append('<button class="recap btn btn-sm btn-primary" style="background-color:#003718;border-color:#003718">recapitulatif</button>');


            //  $("body").append("<button class='share'>share</button>")
            let pseudo = localStorage.getItem("pseudo");
            if (pseudo === "" || typeof (pseudo) === undefined || pseudo == undefined || pseudo == null) {
                // $("body").append("<input type='text' class='pseudo' placeholder='entrez votre pseudo'/> <button class='savePseudo'>enregistrer</button>");
            } else {
                console.log("NONE")
                // $.post("http://localhost:8022/", { pseudo: pseudo, score: score, totalscore: parseInt(localStorage.getItem("score")) });
            }

            //    $(".savePseudo").click(() => {
            //localStorage.setItem("pseudo", $(".pseudo").val());
            //$.post("http://localhost:8022/", { pseudo: $(".pseudo").val(), score: score });
            //  });

            $(".recap").click(() => {
                console.log("RECAP");
                $(".container-questions").hide();
                $(".recapContent").remove();
                $("body").prepend("<div class='recapContent'></div>");
                recap.forEach((element) => {
                    let template = `<div class="container">
                    <div class="row" style="margin-top: 5%;">
                      <div class="col-xs-12" style="padding-left: 15%;padding-right: 15%;">
                        <div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title" style="color:#003718;">${element.question}</h5>
                            <p class="card-text">
                                ${element.questionContent}
                            </p>
                            <p class="card-text">
                            ${element.comment}
                            </p>
                          </div>
                          <ul class="list-group list-group-flush">
                          <li class="list-group-item ">Votre réponse ${element.response}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>`
                    $(".recapContent").append(template)

                });

            });

            /*  $(".share").click((e) => {
                FB.ui({
                  method: 'share',
                  href: 'https://developers.facebook.com/docs/',
                }, function (response) { })
              })*/

            $(".restart").click((e) => {
                recap = [];
                $(".recapContent").remove();
                $(".container-questions").show();
                $(".content-suggestions").remove();
                $(".contentQuiz").append('<ul class="list-group list-group-flush content-suggestions"></ul>');

                timer = 15;
                score = 0;
                cursor = 0;
                questions = shuffle(data).slice(0, 10);

                $(".score").text(score);
                buildQuestions(questions[cursor]);

                $(".restart").remove();
                $(".recap").remove();
            });

        }
    }, 300);
}

function initTimer() {
    timer--;
    $(".timer").text(timer);
    if (timer == 0 || timer < 0) {
        timer = 15;
        console.log("clear inter" + interval)
        clearInterval(interval);
        reBuildUi();
    }
}
