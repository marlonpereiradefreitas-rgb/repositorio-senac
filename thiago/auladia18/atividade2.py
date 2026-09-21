nomes = []

# Entrada dos 5 nomes
for i in range(5):
    nome = input(f"Digite o {i + 1}º nome: ")
    nomes.append(nome)

# Exibe a lista dos nomes
print("\nLista dos nomes:")
print(nomes)

# Exibe os nomes na ordem inversa
print("\nNomes na ordem inversa:")
for nome in reversed(nomes):
    print(nome)