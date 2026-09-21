numero1 = float(input("Digite o primeiro número:"))
numero2 = float(input("Digite o ssegundo número:"))

operacao = input("Digite a operação (soma, subtração, multiplicação, divisão):")

#operação de soma
if operacao == "soma": 
    resultado = numero1 + numero2
    print("Resultado", resultado)

#operação de subtração
elif operacao == "subtração":
    resultado = numero1 - numero2
    print("Resultado", resultado)

#operação de multiplicação
elif operacao == "multiplicação":
    resultado = numero1 * numero2
    print("Resultado", resultado)

#operação de divisão
elif operacao == "divisão":
    if numero2 != 0:
        resultado = numero1 / numero2
        print("Resultado", resultado)
    else:
        print("Não é possível dividir por zero.")

else:
    print("Operação inválida.")
