require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";
import  express  from "express";


const CLAUDE_API = process.env.ANTHROPIC_API_KEY;


// by default it use ANTHROPIC_API_KEY
const anthropic = new Anthropic();
const app = express();
app.use(express.json())


//chat
app.post("/chat", async (req,res) =>{
    const messages = req.body.messages;

       const response = await anthropic.messages.create({
          messages: messages,
          model: 'claude-3-7-sonnet-20250219',
          max_tokens: 200,
          system: "hello amrit"
      })

      console.log(response);

      res.json({});
})




//streaming
// async function main() {
//       anthropic.messages.stream({
//         messages: [{role: 'user', content: "Hello"}],
//         model: 'claude-3-7-sonnet-20250219',
//         max_tokens: 1024,
//         system: getSystemPrompt()
//     }).on('text', (text) => {
//         console.log(text);
//     });

// }   

// main();


app.listen(3000, ()=>{
    console.log("server is running at port 3000.")
});
