// Datos de vehículos disponibles
const vehiculos = [
  {
    nombre: "Kia Picanto",
    tipo: "Económico",
    transmision: "Manual",
    precio: "$80.000/día"
  },
  {
    nombre: "Mazda 3",
    tipo: "Sedán",
    transmision: "Automática",
    precio: "$120.000/día"
  },
  {
    nombre: "Toyota Fortuner",
    tipo: "SUV",
    transmision: "Automática",
    precio: "$200.000/día"
  }
];

// Mostrar vehículos
const contenedorVehiculos = document.getElementById("vehiculos");

vehiculos.forEach(v => {
  const div = document.createElement("div");
  div.classList.add("vehiculo");
  div.innerHTML = `
    <h3>${v.nombre}</h3>
    <p>Tipo: ${v.tipo}</p>
    <p>Transmisión: ${v.transmision}</p>
    <p><strong>${v.precio}</strong></p>
    <button onclick="alert('Reserva iniciada para ${v.nombre}')">Reservar</button>
  `;
  contenedorVehiculos.appendChild(div);
});

// Formulario de reserva
const form = document.getElementById("formReserva");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Reserva enviada con éxito a AutoYaCali. Te contactaremos pronto.");
  form.reset();
});