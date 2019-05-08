let interval;
let timer = 15;
let score = 0;
let cursor = 0;
let questions = shuffle(data).slice(0, 10);
let recap = [];

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
        $(".content-suggestions").append(`<li class="list-group-item suggestiontitle suggestion${index + 1}" data-correct="${element.correct}" data-comment="${element.comment}">${element.text}</li>`);
        $(`.suggestion${index + 1}`).click(function (e) {
            let correct = $(this).attr("data-correct");
            if (correct.indexOf("true") == 0) {
                score += timer;
                $(".score").text(score);
                $(this).css("background-color", "green")
            } else {
                $(this).css("background-color", "red")
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
            console.log("EACH")
            $(".suggestiontitle").each(function () {
                $(this).addClass("disabled");
            })
            if (parseInt(localStorage.getItem("score")) === NaN
                || typeof (parseInt(localStorage.getItem("score"))) == NaN) {
                localStorage.setItem("score", score);
            } else {
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + score);
            }
            $(".content-action").append('<div class="col-6 text-center"><button class="restart btn btn-md btn-primary madede-color">rejouer</button></div>');
            $(".content-action").append('<div class="col-6 text-center"><button class="recap btn btn-md btn-primary madede-color">recapitulatif</button></div>');

            $(".recap").click(() => {
                console.log("RECAP");
                $(".container-questions").hide();
                $(".recapContent").remove();
                $("body").prepend("<div class='recapContent'></div>");
                recap.forEach((element) => {
                    let template = `<div class="container mt-3">
                    <div class="row mt-3">
                      <div class="col-12 text-center">
                        <div class="card">
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
                          <li class="list-group-item ">Votre réponse: ${element.response}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>`
                    $(".recapContent").append(template)

                });

            });

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
