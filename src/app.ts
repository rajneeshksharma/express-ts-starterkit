import express ,{Application , Request , Response , NextFunction} from 'express';
const app : Application = express();

app.get('/',(req : Request, res : Response , next : NextFunction)=>{
    console.log("Hit made")
    res.status(200).json({MSG : "Hi user"});
});

app.listen(5000,()=>{
    console.log(`Server run on 5000 port`);
})