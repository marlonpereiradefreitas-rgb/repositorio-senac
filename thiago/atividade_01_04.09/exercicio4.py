peso = float(input("Digite seu peso em kg:"))
altura = float(input("digite sua altura em metros:"))

imc = peso / (altura ** 2)

print("Seu IMC é:", imc)

if imc < 18.5:
    print("Abaixo do peso")

elif imc < 25:
    print("Peso normal")

elif imc < 30:
    print("Sobrepeso")

else:
    print("Obesidade")
