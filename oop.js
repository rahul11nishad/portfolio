// factory function ------------------------------->

function fish(name,speed,color)
{
    return {
        name:name,
        speed:speed,
        color:color,
        about:function()
        {
            console.log(`${name} is ${color} and speed ${speed}`);
        }
    };
}

let fish1=fish("star",450,"blue");
console.log(fish1.about);