quantidade_frangos = int(input("Quantidade de frangos: "))

quantidade_frangos = 100
custo_chip = 4
custo_anel = 3.50

custo_por_frango = custo_chip + (2 * custo_anel)

custo_total = quantidade_frangos * 11

print(f"Custo total: R$ {custo_total:.2f}")
