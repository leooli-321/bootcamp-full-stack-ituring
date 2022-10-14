cor = "laranja";
nomeCor = "";

switch (cor) {
    case "vermelho":
        nomeCor = "rgb(255,0,0)";
        break;
    case "laranja":
        nomeCor = "rgb(255,128,0)";
        break;
    case "amarelo":
        nomeCor = "rgb(255,255,0)";
        break;
    case "verde":
        nomeCor = "rgb(,255,)";
        break;
    case "azulClaro":
        nomeCor = "rgb(0,255,255)";
        break;
    case "azulMarinho":
        nomeCor = "rgb(0,0,255)";
        break;
    case "rosa":
        nomeCor = "rgb(255,0,255)";
        break;
    default:
        nomeCor = "rgb(255,255,255)";
}
console.log(nomeCor);