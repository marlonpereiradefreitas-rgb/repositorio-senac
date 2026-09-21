numeros = []

for i in range(5):
    n = int(input("Digite um número: "))
    numeros.append(n)

print("Soma: ", sum(numeros))

print("Números pares: ")
for n in numeros:
    if n % 2 == 0:
        print(n)
