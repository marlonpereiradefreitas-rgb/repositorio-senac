quantidade = int(input("Quantidade de peças: "))
valor_unitario = float(input("Valor unitário (R$): "))

valor_total = quatidade + valor_unitario

if quantidade >= 10:
    desconto = valor_total * 0.20
elif quantidade >= 5:
    desconto = valor_total * 0.10
else:
    desconto = 0

    valor_final = valor_total - desconto 
    print(f"valor final da compra: R$  {valor_final:;2 f}")
