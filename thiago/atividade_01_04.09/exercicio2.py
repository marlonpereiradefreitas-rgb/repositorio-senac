numero1 = float(input("Digite o primeiro número:"))
numero2 = float(input("Digite o segundo número:"))
numero3 = float(input("Digite o terceiro número:"))

if numero1 >= numero2 and numero1 >= numero3:
    maior = numero1
elif numero2 >= numero1 and numero2 >= numero3:
    maior = numero2
else:
    maior = numero3

print("O maior número é:", maior)
