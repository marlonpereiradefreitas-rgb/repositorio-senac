ano = int(input("Digite um ano: "))

if ano % 400 == 0:
    print("O ano é Bissexto")

elif ano % 100 == 0:
    print("O ano não é bissexto")

elif ano % 4 == 0:
    print("O ano é Bissexto")

else:
    print("O ano não é bissexto")

