



function ContactMe(){

    const handleEmailSubmit = e =>{
        e.preventDefault();
    }


    return(
        <div className = 'contactMeContainer'>
            <form className ='contactMeForm'>
                <h2>Contact me section</h2>
                <label for='nameInput'>Enter your name.</label>
                <input type='text' placeholder='Enter name'/>
                <label for='emailInput'>Enter your email.</label>
                <input type='text' placeholder='Enter email'/>
                <label for='messageInput'>Enter your message.</label>
                <input type='text' placeholder='Enter message'/>
                <button onSubmit = {()=>handleEmailSubmit}>Send!</button>
            </form>
        </div>
    )
}
 
export default ContactMe;