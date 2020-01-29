let hours = 60;
let wage=12;
let annual=0;

if
    (hours<=40) {
    console.log (`Pay=$${hours*wage}`);
    }

else{
    let extra = hours - 40;
console.log(`Pay=$ ${(wage*40) + (extra * wage * 1.5)}`);
}


    let weeks=0;
while(annual<=1000000)
//    increase wage until 1000000
{

    if
    (hours<=40) {
    console.log (`Pay=$${hours*wage}`);
    annual=annual+hours*wage;
    }

else{
    let extra = hours - 40;
    console.log(`Pay=$ ${(wage*40) + (extra * wage * 1.5)}`);
    annual=annual+(wage*40) + (extra * wage * 1.5);
   
}
weeks++;
}
console.log (weeks);