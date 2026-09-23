import tkinter as tk

def calcular():
    peso = float(entrada_peso.get())
    altura = float(entrada_altura.get())

    imc = peso / (altura * altura)

    if imc < 18.5:
        classificacao = "Abaixo do peso"
    elif imc < 25:
        classificacao = "Peso normal"
    elif imc < 30:
        classificacao = "Sobrepeso"
    else:
        classificacao = "Obesidade"

    resultado.config(text=f"IMC: {imc:.2f}\n{classificacao}")


janela = tk.Tk()
janela.title("Calculadora de IMC")
janela.geometry("350x250")

tk.Label(janela, text="Peso (kg):").pack()
entrada_peso = tk.Entry(janela)
entrada_peso.pack()

tk.Label(janela, text="Altura (m):").pack()
entrada_altura = tk.Entry(janela)
entrada_altura.pack()

tk.Button(janela, text="Calcular", command=calcular).pack()

resultado = tk.Label(janela, text="")
resultado.pack()

janela.mainloop()