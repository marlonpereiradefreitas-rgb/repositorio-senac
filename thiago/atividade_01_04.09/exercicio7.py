temperatura = float(input("Digite a temperatura:"))
escala = input("digite a escala (C ou F):")

if escala == "F" or escala == "f":
    resultado = temperatura * 9 / 5 + 32
    print("Temperatura em Fahrenheit", resultado)

elif escala == "C" or escala == "c":
    resultado = (temperatura - 32) * 5 / 9
    print("Temperatura em Césius", resultado)

else:
    print("Escála Inválida")

