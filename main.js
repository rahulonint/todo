const add = document.querySelector(".add")
const tasks = document.querySelector(".tasks")
const input = document.querySelector(".input")

add.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value === "") {
        alert("Please, enter some text.")
    }
    else {
        tasks.classList.add("show")
        let innerBox = document.createElement("div")
        innerBox.classList.add("innerBox")
        tasks.append(innerBox)

        const element = document.createElement("span")
        element.classList.add("common-box")
        element.textContent = input.value
        innerBox.append(element)

        const done = document.createElement("span")
        done.innerHTML = "done"
        done.classList.add("done")
        innerBox.append(done)

        input.value = ""

        done.addEventListener("click", () => {
            innerBox.style.background = "#474746"
            done.textContent = "completed"
        })
    }
})
