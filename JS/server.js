// Importar dependencias necesarias
const express = require("express");       // Framework para crear el servidor
const nodemailer = require("nodemailer"); // Librería para enviar correos
const bodyParser = require("body-parser");// Para procesar datos JSON del cliente
const cors = require("cors");             // Permite peticiones desde otros dominios/puertos

const app = express();

// Configurar middlewares
app.use(cors());              // Habilita CORS para que el frontend pueda conectarse al backend
app.use(bodyParser.json());   // Permite recibir datos en formato JSON

// Configurar el transporte de correo usando Gmail
// Debes tener activada la verificación en dos pasos y usar una contraseña de aplicación
const transporter = nodemailer.createTransport({
  service: "gmail", // Usamos Gmail como servicio de envío
  auth: {
    user: "autoyacali0@gmail.com", // Tu correo de Gmail
    pass: "anumceiixkgngwpr",         // Contraseña de aplicación generada en Google
  },
});

// Ruta POST para enviar correo
app.post("/enviar", (req, res) => {
  // Extraer el correo que envía el usuario desde el cuerpo de la solicitud
  const { correo } = req.body;

  // Opciones del correo
  const mailOptions = {
    from: "autoyacali0@gmail.com", // Remitente (debe ser igual que auth.user)
    to: [correo, "autoyacali0@gmail.com"], // Destinatarios: usuario + copia para ti
    subject: "🎉 Bienvenido a AutoYaCali",  // Asunto del correo
    // Contenido HTML con estilos para que el mensaje se vea más atractivo
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
          <h2 style="color: #8a79f0; text-align: center;">¡Gracias por suscribirte!</h2>
          <p style="font-size: 16px; color: #333;">
            Hola <strong>${correo}</strong>,<br><br>
            Nos alegra mucho que te unas a <b>AutoYaCali</b> 🚗✨.<br>
            A partir de ahora recibirás nuestras mejores ofertas, promociones exclusivas y novedades.
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://autoyacali.com" 
               style="display: inline-block; background: #8a79f0; color: white; padding: 10px 20px; 
                      border-radius: 5px; text-decoration: none; font-weight: bold;">
              Visítanos
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #888; text-align: center;">
            © 2025 AutoYaCali. Todos los derechos reservados.
          </p>
        </div>
      </div>
    `
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error enviando correo:", err);
      return res.status(500).send("Error al enviar el correo");
    }
    // Respuesta de éxito al cliente
    res.send("Correo enviado: " + info.response);
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
