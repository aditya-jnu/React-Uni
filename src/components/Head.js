function Head(props){
 
    function searchHandle(){
        let ipValue=document.getElementById("find").value;
        props.getVal(ipValue);
    }
    function resett(){
        props.getVal("");
    }
    
    return(
        <div className="head">
            <div className="head1" onClick={resett}>Home</div>
            <div className="head2">
                <input type="text" placeholder="search by country name...." id="find"></input>
                <button onClick={searchHandle}>Search</button>
            </div>
        </div>
    )
}
export default Head;