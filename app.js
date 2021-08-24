var P1button=document.querySelector('#P1button');
var P2button=document.querySelector('#P2button');
var reset=document.querySelector('#reset');
var p1scr=0;
var p2scr=0;
var goal=document.querySelector('#goal');
var limit=goal.value;
var p1dis=document.querySelector('#P1score');
var p2dis=document.querySelector('#P2score');
function resetScore()
{
    p1scr=p2scr=0;
    p1dis.innerText=p1scr;
    p2dis.innerText=p2scr;
    p1dis.style.color='black';
    p2dis.style.color='black';
}
P1button.addEventListener('click',function()
{
    ++p1scr;
    var limit=goal.value;
    if(p1scr<=limit)
    {
    if(p1scr==limit)
    {
        p1dis.style.color='rgb(95, 253, 156)';
        p1dis.innerText=p1scr;
        p2dis.style.color='rgb(253, 130, 130)';
        alert('Player 1 Wins');
    }
    else
    p1dis.innerText=p1scr;
    }
});
P2button.addEventListener('click',function()
{
    ++p2scr;
    var limit=goal.value;
    if(p2scr<=limit)
    {
    if(p2scr==limit)
    {
        p2dis.style.color='rgb(95, 253, 156)';
        p2dis.innerText=p1scr;
        p1dis.style.color='rgb(253, 130, 130)';
        alert('Player 2 Wins');
    }
    else
    p2dis.innerText=p2scr;
    }
});
reset.addEventListener('click',resetScore);
