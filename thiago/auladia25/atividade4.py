import tkinter as tk
from tkinter import messagebox

def calcular(operacao):
    try:
        numero1 = float(entrada1.get())
        numero2 = float(entrada2.get())

        if operacao == "+":
            resultado = numero1 + numero2

        elif operacao == "-":
            resultado = numero1 - numero2

        elif operacao == "*":
            resultado = numero1 * numero2

        elif operacao == "/":
            if numero2 == 0:
                messagebox.showerror("Erro", "Não é possível dividir por zero!")
                return

            resultado = numero1 / numero2

        label_resultado.config(text=f"Resultado: {resultado}")

    except ValueError:
        messagebox.showerror("Erro", "Digite números válidos!")


janela = tk.Tk()
janela.title("Calculadora")
janela.geometry("350x250")

tk.Label(janela, text="Primeiro número:").grid(row=0, column=0, padx=10, pady=10)

entrada1 = tk.Entry(janela)
entrada1.grid(row=0, column=1)

tk.Label(janela, text="Segundo número:").grid(row=1, column=0, padx=10, pady=10)

entrada2 = tk.Entry(janela)
entrada2.grid(row=1, column=1)

tk.Button(
    janela,
    text="+",
    command=lambda: calcular("+")
).grid(row=2, column=0, pady=10)

tk.Button(
    janela,
    text="-",
    command=lambda: calcular("-")
).grid(row=2, column=1)

tk.Button(
    janela,
    text="×",
    command=lambda: calcular("*")
).grid(row=3, column=0)

tk.Button(
    janela,
    text="÷",
    command=lambda: calcular("/")
).grid(row=3, column=1)

label_resultado = tk.Label(janela, text="Resultado:")
label_resultado.grid(row=4, column=0, columnspan=2, pady=20)

janela.mainloop()