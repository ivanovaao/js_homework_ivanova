var a = 100;
var b = 1000;

var min = Math.min (a, b);
var max = Math.max (a, b);

var c1 = 0;
var c2 = 0;
var d;

function checkProbabilityTheory(count){

    for (let i=1; i<=count; i++){
    let random = Math.floor(min + Math.random() * (max + 1 - min));
    if (random % 2 === 0){
                console.log("случайное четное число в диапазоне от " + a + " до " + b + " =", random);
                c1 +=1;
     
        } else
        if (random % 2 != 0){
            console.log("случайное нечетное число в диапазоне от " + a + " до " + b + " =", random);
            c2 +=1;
            }  
        }

        console.log ('Количество сгенерированных чисел: ' + count);
        }
        checkProbabilityTheory (5);
        
        console.log ('Количество четных чисел: ' + c1);
        console.log ('Количество нечетных чисел: ' + c2);
        if (c2===0) {console.log("Процентное отношение четных чисел к нечетным: 0%");} else
        console.log ("Процентное отношение четных чисел к нечетным: " + (d = Math.floor((c1/c2)*100)) + "%");