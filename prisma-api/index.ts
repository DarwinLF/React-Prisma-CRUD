import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

//Profiles

app.get("/profile", async (request, response) => {
    const profiles = await prisma.profiles.findMany();
    
    response.status(200).json(profiles);
})

app.get('/profile/:username', async (request, response) => {
    const {username} = request.params;

    const profile = await prisma.profiles.findFirst({
        where: {UserName: username}
    })
    
    response.status(200).json(profile);
})

app.post("/profile", async (request, response) => {
    const {userName} = request.body;

    try{
        const result = await prisma.profiles.create({
            data: {
                UserName: userName
            }
        })

        response.status(201).json(result);
    }
    catch(error) {
        response.status(500).json(error)
    }
})

app.put("/profile/:username", async (request, response) => {
    const {username} = request.params;
    const {newUserName} = request.body;

    try{
        const result = await prisma.profiles.update({
            where: {UserName: username},
            data: {
                UserName: newUserName
            }
            
        })
    
        response.status(200).json(result);
    }
    catch(error) {
        response.status(500).json(error)
    }
})

app.delete("/profile/:username",async (request, response) => {
    const {username} = request.params;
    
    const result = await prisma.profiles.delete({
        where: {UserName: username}
    })

    response.status(200).json(result);
})

//Clients

app.get("/client", async (request, response) => {
    const clients = await prisma.clients.findMany();
    
    response.status(200).json(clients);
})

app.get('/client/:clientId', async (request, response) => {
    const {clientId} = request.params;

    const client = await prisma.clients.findFirst({
        where: {ClientID: +clientId}
    })
    
    response.status(200).json(client);
})

app.post("/client", async (request, response) => {
    const {firstName, lastName, userName} = request.body;

    try{
        const result = await prisma.clients.create({
            data: {
                FirstName: firstName,
                LastName: lastName,
                UserName: userName
            }
        })
    
        response.status(201).json(result);
    }
    catch(error) {
        response.status(500).json(error);
    }
    
})

app.put("/client/:clientId", async (request, response) => {
    const {clientId} = request.params;
    const {firstName, lastName, userName} = request.body;

    try {
        const result = await prisma.clients.update({
            where: {ClientID: +clientId},
            data: {
                FirstName: firstName,
                LastName: lastName,
                UserName: userName
            }
            
        })
    
        response.status(200).json(result);
    }
    catch(error) {
        response.status(500).json(error);
    }
    
})

app.delete("/client/:clientId",async (request, response) => {
    const {clientId} = request.params;
    
    const result = await prisma.clients.delete({
        where: {ClientID: +clientId}
    })

    response.status(200).json(result);
})

//Products

app.get("/product", async (request, response) => {
    const products = await prisma.products.findMany();
    
    response.status(200).json(products);
})

app.get('/product/:sku', async (request, response) => {
    const {sku} = request.params;

    const product = await prisma.products.findFirst({
        where: {SKU: sku}
    })
    
    response.status(200).json(product);
})

app.post("/product", async (request, response) => {
    const {sku, name, stock, price, userName} = request.body;

    try{
        const result = await prisma.products.create({
            data: {
                SKU: sku,
                Name: name,
                Stock: stock,
                Price: price,
                UserName: userName
            }
        })
    
        response.status(201).json(result);
    }
    catch(error) {
        response.status(500).json(error);
    }
    
})

app.put("/product/:sku", async (request, response) => {
    const {sku} = request.params;
    const {newSku, name, stock, price, userName} = request.body;

    try {
        const result = await prisma.products.update({
            where: {SKU: sku},
            data: {
                SKU: newSku,
                Name: name,
                Stock: stock,
                Price: price,
                UserName: userName
            }
            
        })
    
        response.status(200).json(result);
    }
    catch(error) {
        response.status(500).json(error);
    }

})

app.delete("/product/:sku",async (request, response) => {
    const {sku} = request.params;
    
    const result = await prisma.products.delete({
        where: {SKU: sku}
    })

    response.status(200).json(result);
})

app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)