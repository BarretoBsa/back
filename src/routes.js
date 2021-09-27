import { Router } from 'express';

const routes = Router();


routes.get('/animal',(req, resp)=>{
    const query = req.query;
    console.log('get aqui', query)
    return resp.json({ok: "get"});
});


// routes.put("/animal/:id",(req, resp)=>{
//     const params = req.params
//     return resp.json({ok: "ola"});
// });


// routes.post("/animal",(req, resp)=>{
//     const body = req.body;
//     return resp.json({ok: "ola"});
// });


// routes.delete("/animal",(req, resp)=>{
//     return resp.json({ok: "ola"});
// });


export default routes;
