lista = []
pares = []
impares = []

for i in range(15):
    n = int(input("Digite um numero: "))
    lista.append(n)

print("\nLista:", lista)
print("Quantidade:", len(lista))

for i in range(15):
    print("Posicao:", i, "Valor:", lista[i])

soma = 0

for i in range(15):
    soma = soma + lista[i]

    if lista[i] % 2 == 0:
        pares.append(lista[i])
    else:
        impares.append(lista[i])

print("\nSoma:", soma)
print("Pares:", pares)
print("Quantidade de pares:", len(pares))

print("Impares:", impares)
print("Quantidade de impares:", len(impares))

soma_pares = 0
for i in range(len(pares)):
    soma_pares = soma_pares + pares[i]

soma_impares = 0
for i in range(len(impares)):
    soma_impares = soma_impares + impares[i]

print("Soma dos pares:", soma_pares)
print("Soma dos impares:", soma_impares)

invertida = lista[::-1]

print("\nLista invertida:")
for i in range(15):
    print(invertida[i])