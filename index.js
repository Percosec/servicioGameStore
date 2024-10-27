const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const PUERTO = 3000;

app.use(bodyParser.json());
app.use(cors());

// Configura tu app de Firebase con la clave de cuenta de servicio
const serviceAccount = require('./gamestore-1b335-firebase-adminsdk-l9pmi-447941b8b5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Inicializa Firestore

app.listen(PUERTO, () => {
    console.log("Servidor corriendo en el puerto " + PUERTO);
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Bienvenido a mi Web Service");
});

//Ruta para obtener juegos
app.get("/games", async (req, res) => {
    try {
        const snapshot = await db.collection("games").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

app.get("/games-accion", async (req, res) => {
    try {
        const snapshot = await db.collection("games-accion").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

app.get("/games-estrategia", async (req, res) => {
    try {
        const snapshot = await db.collection("games-estrategia").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

app.get("/games-rpg", async (req, res) => {
    try {
        const snapshot = await db.collection("games-rpg").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

app.get("/games-shooter", async (req, res) => {
    try {
        const snapshot = await db.collection("games-shooter").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

app.get("/games-aventura", async (req, res) => {
    try {
        const snapshot = await db.collection("games-aventura").get();
        const listaGames = [];

        if (snapshot.empty) {
            res.json("No hay registros");
            return;
        }

        snapshot.forEach(doc => {
            listaGames.push({ id: doc.id, ...doc.data() });
        });

        res.json({ listaGames });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener datos");
    }
});

// // Ruta para agregar una nueva persona
// app.post("/personas", async (req, res) => {
//     try {
//         const data = req.body;
//         const docRef = await db.collection("personas").add(data);
//         res.status(201).send(`Persona agregada con ID: ${docRef.id}`);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error al agregar persona");
//     }
// });
