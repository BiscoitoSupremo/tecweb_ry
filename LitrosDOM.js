function calcule(){

    T = document.getElementById("inptempo").value;
    V = document.getElementById("inpV").value;
    console.log(T + V);
    
    D = T * V;
    G = D / 12;
    
    alert("o valor equivalente ao gastos em litros será:"+ V + "KM/H" +" \n seu tempo gasto foi:" + T +"horas" 
+"\n Sua distância percorrida foi:" + D +"km percorridos"+"\n E foi gasto de gasolina:" + G + "litos gastos");

    alert("De nada (ง'̀-'́)ง")
}
