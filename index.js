let incidencies = [
    { 
        id: 1, 
        titol: "Sense connexió a internet", 
        descripcio: "El Wi-Fi de la sala de reunions no té accés a la xarxa.", 
        estat: "obert", 
        prioritat: "alta", 
        dataCreacio: "2025-10-01", 
        assignat: "Laura Vidal" 
    },
    { 
        id: 2, 
        titol: "Error en el correu corporatiu", 
        descripcio: "No es poden enviar arxius adjunts pesants.", 
        estat: "proces", 
        prioritat: "mitjana", 
        dataCreacio: "2025-10-02", 
        assignat: "Marc Soler" 
    },
    { 
        id: 3, 
        titol: "Instal·lació de teclat nou", 
        descripcio: "Substituir el teclat inalàmbric del despatx 4.", 
        estat: "tancat", 
        prioritat: "baixa", 
        dataCreacio: "2025-10-03", 
        assignat: "Elena Puig" 
    },
    { 
        id: 4, 
        titol: "Bloqueig de compte d'usuari", 
        descripcio: "El sistema demana restablir la contrasenya d'accés.", 
        estat: "obert", 
        prioritat: "alta", 
        dataCreacio: "2025-10-04", 
        assignat: "David Ferrer" 
    },
    { 
        id: 5, 
        titol: "Configuració d'accés remot", 
        descripcio: "Preparar la connexió VPN per a teletreball.", 
        estat: "proces", 
        prioritat: "mitjana", 
        dataCreacio: "2025-10-05", 
        assignat: "Sofia Roca" 
    }
];


//Metemos todas las incidencias dentro de la tabla
let tableTr = " "

for(let i = 0; i < incidencies.length; i++){
    tableTr += "<tr>"
    tableTr += "<td>" + incidencies[i].id + "</td>"
    tableTr += "<td>" + incidencies[i].titol + "</td>"
    tableTr += "<td>" + incidencies[i].descripcio + "</td>"
    tableTr += "<td>" + incidencies[i].estat + "</td>"
    tableTr += "<td>" + incidencies[i].prioritat + "</td>"
    tableTr += "<td>" + incidencies[i].assignat + "</td>"
    tableTr += "<td>" + incidencies[i].dataCreacio + "</td>"
    tableTr += "<td>" + "<button>Editar</button> <button>Eliminar</button>" + "</td>"
    tableTr += "</tr>"
}

document.querySelector("#tabla").innerHTML = tableTr

//Datos de los proyectos que hay
