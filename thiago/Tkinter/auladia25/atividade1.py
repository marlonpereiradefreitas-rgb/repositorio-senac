import tkinter as tk

def saudar():
    nome = entrada.get()
    label.config(text=f"Olá, {nome}!")

janela = tk.Tk()
janela.title("Saudação")
janela.geometry("300x200")

entrada = tk.Entry(janela)
entrada.pack(pady=20)

botao = tk.Button(janela, text="Saudar", command=saudar)
botao.pack()

label_resultado = tk.Label(janela, text="")
label_resultado.pack(pady=20)

janela.mainloop()