import './App.css';
import gptLogo from './assets/chatgpt.svg' 
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import  rocket from './assets/rocket.svg'
import sendBtn from'./assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';
function App() {
  const [input , setInput] = useState("");
    const handleSend = async ()=>
    {
      const res = await sendMsgToOpenAI(input);
      console.log(res);
    }

  return (
     <div className="App">
      <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
            <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is Programming</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an Api</button>
             </div>
          </div>
          <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
              <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
              <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade To Pro</div>

          </div>
      </div>
      <div className="main">
          <div className="chats">
            <div className="chat">
              <img className='chatimg' src={userIcon} alt="" />
                <p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt est, quod atque nisi minima culpa saepe quasi sequi recusandae repellat facere voluptas dolor iure voluptatem unde accusamus omnis distinctio officia?</p>
            </div>
            <div className="chat bot">
              <img className='chatimg' src={gptImgLogo} alt="" />
                <p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, voluptatibus doloremque. Recusandae rerum deleniti maxime maiores adipisci eius, a repellendus quaerat eos nihil culpa libero deserunt molestias dolore ipsam odio, nostrum itaque sed magnam. Fuga ratione, repellat placeat vel numquam ut? Earum laboriosam reiciendis necessitatibus nostrum facilis rerum, consequatur repellendus suscipit nulla nam deserunt ratione. Provident nostrum impedit mollitia quisquam laborum ipsa corrupti ea eveniet eos totam iusto nulla dolorem reiciendis officia molestiae at, doloremque, eum nemo illum? Voluptatem in tempora dolor iusto, sequi dignissimos magni officiis facilis animi quibusdam nobis velit, voluptatibus inventore. Quasi, beatae? Magnam animi ullam expedita. </p>
             </div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a message...'  value={input} onChange={(e)=>{setInput(e.target.value)}}/>
              <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
              <p>
              ChatGPT can make mistakes. Consider checking important information.
              </p>
          </div>
      </div>
     </div>
  );
}

export default App;
