let questions=[
    {
        q:"what is the full form of html",
        a:"Hyper text markup Language",
        b:"height text meetup lanuage",
        c:"minjo ni pta",
        d:"hyper transition language",
        right:option1,
    },
    {
        q:"what is the full form of https",
        a:"Hyper text transfer protocol",
        b:"height text meetup lanuage",
        c:"minjo ni pta",
        d:"hyper transition language",
        right:option1,
    }
]

function Show()
{
    let que=document.querySelector('.question');
    que.innerHTML=questions[0].q;
    document.querySelector('.option1').innerText=questions[0].a;
    document.querySelector('.option2').innerText=questions[0].b;
    document.querySelector('.option3').innerText=questions[0].c;
    document.querySelector('.option4').innerText=questions[0].d;
}

Show();
function answer()
{
    let useranswer=document.querySelector('input[name="options"]:checked');
    console.log(useranswer);
}