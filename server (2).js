const net = require('net');

var buffer = "";

const server = net.createServer((c)=>{
	console.log("Cliente conectado!");
	
	c.on('end', ()=>{
	console.log("Cliente desconectado!");
	})
	
	c.on('data', (dado)=>{
		buffer+= dado;
		if (dado.includes("\n")){
			console.log("Cliente disse: "+buffer);
			buffer = "";
		}
	});
});

server.listen(2718,()=>{
	console.log("Servidor aguardando conexoes na porta 2718");
});

