valor = float(input("Digite o valor da compra:"))

if valor > 500:
    desconto = valor * 0.15
    valor_final = valor - desconto
    print("Desconto de 15%")
    print("Valor do desconto:", desconto)
    print("Valor final", valor_final)

elif valor > 200:
    desconto = valor * 0.10
    valor_final = valor - desconto
    print("Desconto de 10%")
    print("Valor do desconto:", desconto)
    print("Valor final", valor_final)

else:
    desconto = 0
    valor_final = valor_final
    print("Sem desconto")
    print("Valor final", valor_final)

