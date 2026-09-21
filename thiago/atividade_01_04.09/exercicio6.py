lado1 = float(input("Digite o primeiro lado:"))
lado2 = float(input("Digite o segundo lado:"))
lado3 = float(input("Digite o terceiro lado:"))

if lado1 + lado2 > lado3 and lado1 + lado3 > lado2 and lado2 + lado3 > lado1:
    print("Os lados dormam um triângulo")

else:
    print("Os lados NÂO formam um triângulo")
