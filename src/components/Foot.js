function Foot(){
  function openLinkInNewTab(event){
    if(event.target.innerHTML==="API")
     window.open("https://github.com/Hipo/university-domains-list-api", "_blank");
    else{
     window.open("https://github.com/aditya-jnu/React-Uni", "_blank");
    }
}
  return(
    <div className="foot">
      <a onClick={openLinkInNewTab}>API</a> 
      <a onClick={openLinkInNewTab}>Github</a>       
    </div>
  )
}
export default Foot;