
const fs = require('fs');
const btnGuardar = document.getElementById('btn-guardar');
const btntabla = document.getElementById('btn-tabla');
const txtidentidad = document.getElementById('identidad');
const txtnombre = document.getElementById('primer_nombre');
const txtapellido = document.getElementById('primer_apellido');
const txtedad = document.getElementById('edad');
const txttelefono = document.getElementById('telefono');
let arr = []


btnGuardar.addEventListener('click', function(e){
    e.preventDefault();   
    fs.open("./matricula.csv",'a',function(err,archivo) {
        if (err){
            console.log('Error al abrir el archivo');
            console.log(error);
            return;
        }
        const linea = `identidad:${txtidentidad.value}, nombre:${txtnombre. value}, apellido:${txtapellido.value}, edad:${txtedad.value}, telefono:${txttelefono.value}\n`
        fs.write(archivo, linea , function(err, written , string) {
            if (err){
                console.log('No Se escribieron los datos');
                console.log(err);
                return;
            }
            console.log('Se escribieron los datos');

        fs.close(archivo,function(err,archivo) {
            if (err){
                console.log('No Se escribieron los datos');
                console.log(err);
                return;
            }
            console.log(`Se cerro el archivo`)

        });
        });
    });
    
});
btntabla.addEventListener('click', function(e){
  e.preventDefault();   
  fs.open("./matricula.csv",'a',function(err,archivo) {
      if (err){
          console.log('Error al abrir el archivo');
          console.log(error);
          return;
      }
      fs.readFile("./matricula.csv",'utf-8',function(err, data) {
          if (err){
              console.log('No Se escribieron los datos');
              console.log(err);
              return;
          }
          console.log(data);
  
          document.getElementById("tabla-form").innerHTML= '<tr><td>'+ data + '</td></tr>'
          
      fs.close(archivo,function(err,archivo) {
          if (err){
              console.log('No Se escribieron los datos');
              console.log(err);
              return;
          }
          console.log(`Se cerro el archivo`)
      });
      });
  });
});
