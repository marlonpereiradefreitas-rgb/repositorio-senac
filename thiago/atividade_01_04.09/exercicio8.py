idade = int(input("Digite sua idade:"))

if idade < 16:
    print("Não pode votar.")

elif idade < 18:
    print("Voto facultativo.")

else:
    print("Voto Obrigatório.")


