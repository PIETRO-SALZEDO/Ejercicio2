
var contactos = [];

function agregarContacto(nombre, telefono, email) {
  var contacto = {
    nombre: nombre,
    telefono: telefono,
    email: email
  };
  contactos.push(contacto);
}

function mostrarContactos() {
  for (var i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
  }
}

function buscarContactoPorNombre(nombre) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i];
    }
  }
  return null;
}

function eliminarContacto(nombre) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      contactos.splice(i, 1);
      return;
    }
  }
}

agregarContacto("pedro salzedo", "3024155386", "pedrosalzedo@hotmail.com");
agregarContacto("María salzedo", "9876543210", "maria.salzedo@hotmail.com");
mostrarContactos();
var contacto = buscarContactoPorNombre("jose salzedo");
console.log(contacto);
eliminarContacto("luis salzedo");
mostrarContactos();