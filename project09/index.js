const root = document.getElementById('root');
const body = document.getElementsByTagName("body")




setInterval(() => {
  let color = ''
  let colr = '0123456789abcdef'
  for (let i = 0; i < 6; i++) {
    let randColor = Math.floor(Math.random() * colr.length)
    color += colr[randColor]
    body[0].style.backgroundColor = `#${color}`
  }
}, 500);

