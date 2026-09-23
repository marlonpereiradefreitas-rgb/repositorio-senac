import tkinter as tk

def verificar():
    numero = int(entrada.get())

    if numero % 2 == 0:
        resultado.config(text="O número é par")

    else:
        resultado.config(text="O número é ímpar")

janela = tk.Tk()
janela.title("Par ou Ímpar")
janela.geometry("350x250")

label = tk.Label(janela, text="Digite um número")
label.pack()

entrada = tk.Entry(janela)
entrada.pack()

botao = tk.Button(janela, text="Verificar", command=verificar)
botao.pack()

resultado = tk.Label(janela, text="")
resultado.pack()

janela.mainloop()