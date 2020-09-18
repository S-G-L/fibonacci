function fibonacci(num)
    {
        let numeros=[0,1];
        for (let i = 2; i < num; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }

app = require("express")();
app.get("/:limit", function(req, res) {
const{limit:L} = req.params;
res.status(200).send({sucesión:fibonacci(parseInt(L))});
});

app.listen(5057, function() {
console.log("El servidor está activo en el puerto 5057");
});