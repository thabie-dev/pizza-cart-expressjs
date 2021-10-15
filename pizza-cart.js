module.exports= 
function cart() {
    let cartdiv = "show"
    let smallT = 0
    let mediumT = 0
    let LargeT = 0
    function setShow() {
        cartdiv = "";
        smallT += 49;
    } 
    
    function getShow() {
        return cartdiv
    } 
    function getSmall() {
        return smallT
    } 
    
    function setShow() {
        cartdiv = "";
        mediumT += 89;
    } 
    
    function getShow() {
        return cartdiv
    } 
    function getMedium() {
        return mediumT
    } 

    function setShow() {
        cartdiv = "";
        LargeT += 150;
    } 
    
    function getShow() {
        return cartdiv
    } 
    function getLarge() {
        return LargeT
    } 

   
    return {
        setShow, 
        getShow,
        getSmall,
        getMedium,
        getLarge
    
    } 

}
