import './app.scss'

const button = document.createElement('button')
button.textContent = 'Open Chat'
document.body.appendChild(button)

button.onclick = ()=>{
    import(/* webpackChunkName: "chat" */ './chat').then(chat=>{
        chat.init()
    })
}