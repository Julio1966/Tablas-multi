const empleados = [
    {
      id: 1,
      nombre: "Julio"
    },
    {
      id: 2,
      nombre: "Oscar"
    },
    {
      id: 3,
      nombre: "Abraham"
    }
  ];
  
  const salarios = [
    {
      id: 1,
      salario: "2000"
    },
    {
      id: 2,
      salario: "1800"
    },
    {
      id: 3,
      salario: "1200"
    }
  ];
  const Puesto = [
    {
      id:1,
      puesto: "Supervisor"
    },
    {
      id: 2,
      puesto: "operador"
    },
    {
      id:3, 
      puesto: "Tecnico"
    }
  ];
  
  const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
      const empleado = empleados.find(e => e.id === id);
      if (empleado) {
        resolve(empleado);
      } else {
        reject(`No existe el empleado con id: ${id}`);
      }
    });
  };
  
  const getSalario = (id) => {
    return new Promise((resolve, reject) => {
      const salario = salarios.find(s => s.id === id)?.salario;
      if (salario) {
        resolve(salario);
      } else {
        reject(`No existe el salario con el id: ${id}`);
      }
    });
  };
  
const getPuesto = (id) => {
  return new Promise((resolve, reject) => {
    const puesto = Puesto.find(p => p.id === id)?.puesto;
    if (puesto) {
      resolve(puesto);
    } else {
      reject(`No existe el puesto con el id: ${id}`);
    }
  });
};

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    const puesto = await getPuesto(id);
    return `El empleado ${empleado.nombre} tiene el puesto de ${puesto} y un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};
  
  const id = 1;
  
  getInfoUsuario(id)
    .then(msg => {
      console.log("TODO BIEN!");
      console.log(msg);
    })
    .catch(err => {
      console.log("Algo salió mal!");
      console.log(err);
    });