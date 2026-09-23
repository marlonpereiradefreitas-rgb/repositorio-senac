import tkinter as tk

def dizer_ola():
    rotulo_resultado.config(text=f"Olá, {campo_nome.get()}!")

janela = tk.Tk()
janela.title("Minha janelinha")
janela.geometry("300x150")

rotulo_nome = tk.Label(janela, text="Digite seu nome")
rotulo_nome.pack(pady=10)

campo_nome = tk.Entry(janela)
campo_nome.pack()

botao_enviar = tk.Button(janela, text="Enviar", command=dizer_ola)
botao_enviar.pack(pady=10)

rotulo_resultado = tk.Label(janela, text="")
rotulo_resultado.pack()

janela.mainloop()