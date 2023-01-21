window.onload = () => {
// img number
let imgNumber = 1
// info
let info = [
    ["Discover innovative ways to decorate","We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."],
    ["We are available all across the globe","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."],
    ["Manufactured with the best materials","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]
]

// on right arrow clicked
rightArrow.onclick = () => {
    if(imgNumber == 3){
        imgNumber = 1
    }else{
        imgNumber++
    }
    changeImg()
}    
// on left arrow clicked
leftArrow.onclick = () => {
    if(imgNumber == 1){
        imgNumber = 3
    }else{
        imgNumber--
    }
    changeImg()
} 
// change image src 
function changeImg(){
    topImg.src = `/images/desktop-image-hero-${imgNumber}.jpg`
    title.textContent = info[imgNumber-1][0]
    paragraph.textContent = info[imgNumber-1][1]
}


}