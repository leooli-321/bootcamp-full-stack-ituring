let dia;

switch (new Date().getDay()) {
    case 01:
        dia = "Segunda";
        break;
    case 02:
        dia = "Terça";
        break;
    case 03:
        dia = "Quarta";
        break;
    case 04:
        dia = "Quinta";
        break;
    case 05:
        dia = "Sexta";
        break;
    case 06:
        dia = "Sábado";
        break;
    case 07:
        dia = "Domingo";
        break;
    default:
        dia = "Este número não é válido para um dia da semana";
}

console.log(dia)