export default function scrollAnimation (description, img) {
  const $images = document.querySelectorAll(img);
  const $descriptions = document.querySelectorAll(description);

  window.addEventListener('scroll', (e) => {
    const scrollTop = document.documentElement.scrollTop;

    $images.forEach( $image => {
      if($image.offsetTop - 350 < scrollTop){
         $image.classList.replace("hidden", "toLeft");
      }
    })

    $descriptions.forEach( $description => {
      if($description.offsetTop - 450 < scrollTop){
         $description.classList.replace("hidden", "toRight");
      }
    })

  })
}