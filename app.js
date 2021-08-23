var P1button=document.querySelector('#P1button');
var P2button=document.querySelector('#P2button');
var reset=document.querySelector('#reset');
var p1scr=0;
var p2scr=0;
var crntscr;
P1button.addEventListener('click',function()
{
    ++p1scr;
    document.querySelector('#P1score').innerText=p1scr;
})
P2button.addEventListener('click',function()
{
    ++p2scr;
    document.querySelector('#P2score').innerText=p2scr;
})
reset.addEventListener('click',function()
{
    console.log('Clicked Reset');
})
