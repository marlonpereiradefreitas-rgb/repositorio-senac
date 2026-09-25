import tkinter as tk
from tkinter import messagebox

def converter():
    try:
        celsius = float(entrada.get())
        fahrenheit = celsius * 9/5 + 32
        # Corrigido de 'confing' para 'config'
        resultado.config(text=f"Fahrenheit: {fahrenheit:.2f}°F")
    except ValueError:
        # Corrigida a indentação para alinhar com o 'try'
        messagebox.showerror("Erro", "Digite um número válido!")

janela = tk.Tk()
janela.title("Conversor de temperatura")
janela.geometry("300x200")

tk.Label(janela, text="Digite a temperatura em celcius").pack(pady=10)

entrada = tk.Entry(janela)
entrada.pack()

botao = tk.Button(janela, text="Converter", command=converter)
botao.pack(pady=10)

resultado = tk.Label(janela, text="")
resultado.pack()

janela.mainloop()