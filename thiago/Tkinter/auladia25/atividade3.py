import tkinter as tk 

def proximo():
    global atual

    # Correção: usar 'ciclo' (ou o nome da variável do for) e 'circulos' no plural
    for ciclo in circulos:
        canvas.itemconfig(ciclo, fill="gray")

    cores = ["red", "yellow", "green"]
    # Correção: o nome da lista é 'circulos' (com 's')
    canvas.itemconfig(circulos[atual], fill=cores[atual])

    atual = (atual + 1) % 3

janela = tk.Tk()
janela.title("Semáforo")
janela.geometry("300x600")

canvas = tk.Canvas(janela, width=150, height=270)
canvas.pack(pady=10)

circulos = []

circulos.append(canvas.create_oval(25, 10, 125, 110, fill="gray"))
circulos.append(canvas.create_oval(25, 85, 125, 185, fill="gray"))
circulos.append(canvas.create_oval(25, 160, 125, 260, fill="gray"))

atual = 0

botao = tk.Button(janela, text="Próximo", command=proximo)
botao.pack()

janela.mainloop()