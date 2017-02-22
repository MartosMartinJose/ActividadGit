var operando="";
var a=null;
var b=null;
var c=2;

$("#igual").click(function(){
	if (a!=null && b!=null){
		if (operando=="+"){
			resultado=parseInt(a)+parseInt(b);
			console.log("suma");
		}else{
			console.log("resta");
			resultado=(parseInt(a))-(parseInt(b));
		}
		console.log(resultado);
		$("#error").text("");
		$("#a").text(resultado);
        $("#b").text("");
        $("#op").text("");
        b=null;
        c=2;
        operando="";
        a=resultado;
        
	}else{
		$("#error").text("Debes definir 2 valores para realizar una operacion");
	}
});

$(".opera").click(function(){
	console.log("opera");
	if (operando=="" && a!=null){
		console.log("ope1");
		operando=this.value;
		$("#op").text(operando);
		c++;
	}else{
		if (a==null){
			$("#error").text("Introduce algun numero primero");
		}else{
			if (operando!=""){
				$("#error").text("Ya has seleccionado un operador");	
			}else{
				$("#error").text("Error de operación");
			}
		}	
	}
});

$("#limp").click(limpiar);

$("button").click(function(){
	var boton=this.value;
	
	if(boton!="-" && boton!="+" && boton!="" && boton!="igual"){
		console.log(boton);
		if(c%2==0){
			boton=$("#a").text()+boton;
			$("#a").text(boton);
			a=boton;
		}else{
			boton=$("#b").text()+boton;
			$("#b").text(boton);	
			b=boton;
		}
		
	}
});

function limpiar(){
	$("#a").text("");
	$("#b").text("");
	$("#op").text("");
	$("#resul").text("");
	operando="";
	a=null;
	b=null;
	c=2;
	$("#error").text("");
}
