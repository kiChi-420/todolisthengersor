
document.getElementById("uj-sor").onclick=function(){
    feladat_neve = document.getElementById("feladat-neve").value
    document.getElementById("ide-rakom-a-dolgokat").innerHTML += 
    `<div class="feladat-sor">
            <h3>${feladat_neve}</h3>
            <div class="feladat-fejlec">
                <button>🖊️</button>
                <button>⬆️</button>
                <button>⬇️</button>
                <button>✔️</button>
                <button>❌</button>
                <button id="torles">🗑️</button>
            </div>
             
        </div>` 

}
document.getElementById("torles").onclick = function(){
    document.getElementById("ide-rakom-a-dolgokat").innerHTML -=
    feladat_neve = document.getElementById("feladat-neve").value
    console.log(feladat_neve)
    `
    <div class="feladat-sor">
            <h3>${feladat_neve}</h3>
            <div class="feladat-fejlec">
                <button>🖊️</button>
                <button>⬆️</button>
                <button>⬇️</button>
                <button>✔️</button>
                <button>❌</button>
                <button id="torles">🗑️</button>
            </div>
             
        </div>
    `
}