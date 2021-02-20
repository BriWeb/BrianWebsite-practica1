export default function scrollAnimation () {

  window.addEventListener('scroll', (e) => {

    const $smartAnimation = document.querySelectorAll("[data-smart-animation]");

    const cb = (entries) => {
      entries.forEach( entry => {
        if(entry.isIntersecting){
          if(entry.target.localName === "img"){
            entry.target.classList.replace("hidden", "toLeft")
          } else{
            entry.target.classList.replace("hidden", "toRight")
          }
        }
      })
    }

    const observer = new IntersectionObserver(cb, {threshold: 0.65})

    $smartAnimation.forEach( element => observer.observe(element))

  })
}