const words = ["POTATO","KITTEN","YOU","NIGHT","KING","QUEEN","TRUMP","SHARK","LAPTOP"]
const challenge = () => {
    task = words[Math.floor(Math.random() *words.length)];
}
let task
window.onload = challenge()
let failures = 0

let a = document.getElementsByClassName("button")[0]
let b = document.getElementsByClassName("button")[1]
let c = document.getElementsByClassName("button")[2]
let d = document.getElementsByClassName("button")[3]
let e = document.getElementsByClassName("button")[4]
let f = document.getElementsByClassName("button")[5]
let g = document.getElementsByClassName("button")[6]
let h = document.getElementsByClassName("button")[7]
let letterI = document.getElementsByClassName("button")[8]
let j = document.getElementsByClassName("button")[9]
let k = document.getElementsByClassName("button")[10]
let l = document.getElementsByClassName("button")[11]
let m = document.getElementsByClassName("button")[12]
let n = document.getElementsByClassName("button")[13]
let o = document.getElementsByClassName("button")[14]
let p = document.getElementsByClassName("button")[15]
let q = document.getElementsByClassName("button")[16]
let r = document.getElementsByClassName("button")[17]
let s = document.getElementsByClassName("button")[18]
let t = document.getElementsByClassName("button")[19]
let u = document.getElementsByClassName("button")[20]
let v = document.getElementsByClassName("button")[21]
let w = document.getElementsByClassName("button")[22]
let x = document.getElementsByClassName("button")[23]
let y = document.getElementsByClassName("button")[24]
let z = document.getElementsByClassName("button")[25]

let gameLetters = document.getElementsByClassName("word")

let penalty = document.getElementsByClassName("fail")

let startButton = document.getElementById("start")

let resetButton = document.getElementById("resetButton")

document.addEventListener("click",(event)=> {
    if (event.target == startButton) {
        startButton.style.display = "none"
        for (i = 0; i < task.length; i++) {
            gameLetters[i].style.display = "inline"
        }
    }
})

document.addEventListener("click",(event)=> {
    let taskArray = task.split("")
    let helper = []
    switch (true) {
        case event.target == a:
            for (i = 0; i < taskArray.length; i++)
                if (taskArray[i] == "A") {
                    helper.push(i)
                    gameLetters[i].textContent = "A"
                    a.style.backgroundColor = "blue"
                    a.style.color = "white"
                }
                if (helper.length == 0) {
                    failures++
                    a.style.backgroundColor = "red"
                    a.style.color = "white"
                }
            break
        case event.target == b:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "B") {
                helper.push(i)
                gameLetters[i].textContent = "B"
                b.style.backgroundColor = "blue"
                a.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                b.style.backgroundColor = "red"
                b.style.color = "white"
            }
            break
        case event.target == c:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "C") {
                helper.push(i)
                gameLetters[i].textContent = "C"
                c.style.backgroundColor = "blue"
                c.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                c.style.backgroundColor = "red"
                c.style.color = "white"
            }
            break
        case event.target == d:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "D") {
                helper.push(i)
                gameLetters[i].textContent = "D"
                d.style.backgroundColor = "blue"
                d.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                d.style.backgroundColor = "red"
                d.style.color = "white"
            }
            break
        case event.target == e:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "E") {
                helper.push(i)
                gameLetters[i].textContent = "E"
                e.style.backgroundColor = "blue"
                e.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                e.style.backgroundColor = "red"
                e.style.color = "white"
            }
            break
        case event.target == f:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "F") {
                helper.push(i)
                gameLetters[i].textContent = "F"
                f.style.backgroundColor = "blue"
                f.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                f.style.backgroundColor = "red"
                f.style.color = "white"
            }
            break
        case event.target == g:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "G") {
                helper.push(i)
                gameLetters[i].textContent = "G"
                g.style.backgroundColor = "blue"
                g.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                g.style.backgroundColor = "red"
                g.style.color = "white"
            }
            break
        case event.target == h:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "H") {
                helper.push(i)
                gameLetters[i].textContent = "H"
                h.style.backgroundColor = "blue"
                h.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                h.style.backgroundColor = "red"
                h.style.color = "white"
            }
            break
        case event.target == letterI:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "I") {
                helper.push(i)
                gameLetters[i].textContent = "I"
                letterI.style.backgroundColor = "blue"
                letterI.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                letterI.style.backgroundColor = "red"
                letterI.style.color = "white"
            }
            break
        case event.target == j:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "J") {
                helper.push(i)
                gameLetters[i].textContent = "J"
                j.style.backgroundColor = "blue"
                j.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                j.style.backgroundColor = "red"
                j.style.color = "white"
            }
            break
        case event.target == k:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "K") {
                helper.push(i)
                gameLetters[i].textContent = "K"
                k.style.backgroundColor = "blue"
                k.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                k.style.backgroundColor = "red"
                k.style.color = "white"
            }
            break
        case event.target == l:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "L") {
                helper.push(i)
                gameLetters[i].textContent = "L"
                l.style.backgroundColor = "blue"
                l.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                l.style.backgroundColor = "red"
                l.style.color = "white"
            }
            break
        case event.target == m:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "M") {
                helper.push(i)
                gameLetters[i].textContent = "M"
                m.style.backgroundColor = "blue"
                m.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                m.style.backgroundColor = "red"
                m.style.color = "white"
            }
            break
        case event.target == n:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "N") {
                helper.push(i)
                gameLetters[i].textContent = "N"
                n.style.backgroundColor = "blue"
                n.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                n.style.backgroundColor = "red"
                n.style.color = "white"
            }
            break
        case event.target == o:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "O") {
                helper.push(i)
                gameLetters[i].textContent = "O"
                o.style.backgroundColor = "blue"
                o.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                o.style.backgroundColor = "red"
                o.style.color = "white"
            }
            break
        case event.target == p:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "P") {
                helper.push(i)
                gameLetters[i].textContent = "P"
                p.style.backgroundColor = "blue"
                p.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                p.style.backgroundColor = "red"
                p.style.color = "white"
            }
            break
        case event.target == q:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "Q") {
                helper.push(i)
                gameLetters[i].textContent = "Q"
                q.style.backgroundColor = "blue"
                q.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                q.style.backgroundColor = "red"
                q.style.color = "white"
            }
            break
        case event.target == r:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "R") {
                helper.push(i)
                gameLetters[i].textContent = "R"
                r.style.backgroundColor = "blue"
                r.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                r.style.backgroundColor = "red"
                r.style.color = "white"
            }
            break
        case event.target == s:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "S") {
                helper.push(i)
                gameLetters[i].textContent = "S"
                s.style.backgroundColor = "blue"
                s.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                s.style.backgroundColor = "red"
                s.style.color = "white"
            }
            break
        case event.target == t:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "T") {
                helper.push(i)
                gameLetters[i].textContent = "T"
                t.style.backgroundColor = "blue"
                t.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                t.style.backgroundColor = "red"
                t.style.color = "white"
            }
            break
        case event.target == u:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "U") {
                helper.push(i)
                gameLetters[i].textContent = "U"
                u.style.backgroundColor = "blue"
                u.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                u.style.backgroundColor = "red"
                u.style.color = "white"
            }
            break
        case event.target == v:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "V") {
                helper.push(i)
                gameLetters[i].textContent = "V"
                v.style.backgroundColor = "blue"
                v.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                v.style.backgroundColor = "red"
                v.style.color = "white"
            }
            break
        case event.target == w:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "W") {
                helper.push(i)
                gameLetters[i].textContent = "W"
                w.style.backgroundColor = "blue"
                w.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                w.style.backgroundColor = "red"
                w.style.color = "white"
            }
            break
        case event.target == x:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "X") {
                helper.push(i)
                gameLetters[i].textContent = "X"
                x.style.backgroundColor = "blue"
                x.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                x.style.backgroundColor = "red"
                x.style.color = "white"
            }
            break
        case event.target == y:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "Y") {
                helper.push(i)
                gameLetters[i].textContent = "Y"
                y.style.backgroundColor = "blue"
                y.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                y.style.backgroundColor = "red"
                y.style.color = "white"
            }
            break
        case event.target == z:
            for (i = 0; i < taskArray.length; i++)
            if (taskArray[i] == "Z") {
                helper.push(i)
                gameLetters[i].textContent = "Z"
                z.style.backgroundColor = "blue"
                z.style.color = "white"
            }
            if (helper.length == 0) {
                failures++
                z.style.backgroundColor = "red"
                z.style.color = "white"
            }
            break
    }
    for (i = 0; i < failures; i++) {
        penalty[i].style.display = "inline"
    }
    if (failures >=5) {
        console.log("Game Over")
    }
})

document.addEventListener("click", (event)=> {
    if (event.target == resetButton) {
        window.location.reload(true)
    }
})