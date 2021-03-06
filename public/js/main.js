const chatForm = document.getElementById("chat-form")
const chatMessage = document.querySelector(".chat-messages")

const socket = io()

//Message from server
socket.on("message", message => {
  console.log(message)
  outputMessage(message)
})

chatForm.addEventListener("submit", e => {
  e.preventDefault()

  // Get message text
  const msg = e.target.elements.msg.value

  // Emit message to server
  socket.emit("chatMessage", msg)

  // Clear input
  e.target.elements.msg.value = ""
  e.target.elements.msg.focus()
})

// Output Message to DOM

function outputMessage(message) {
  const div = document.createElement("div")

  div.classList.add("message")
  div.innerHTML = `<p>${message.username}</p><p>${message.text}</p><p>${message.time}</p>`
  document.querySelector(".chat-messages").appendChild(div)
}

//mysql

function mysqlTest() {
  console.log("mysql teest")
}
