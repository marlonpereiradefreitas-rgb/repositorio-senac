pares = []
impares = []

# Entrada de 10 números
for i in range(10):
    numero = int(input(f"Digite o {i + 1}º número: "))

    if numero % 2 == 0:
        pares.append(numero)
    else:
        impares.append(numero)

# Exibe os dois vetores em sequência
print("\nVetor de números pares:")
print(pares)

print("\nVetor de números ímpares:")
print(impares)