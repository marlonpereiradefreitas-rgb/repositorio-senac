import tkinter as tk
from tkinter import messagebox


def finalizar_pedido():
    nome = entrada_nome.get().strip()

    if nome == "":
        messagebox.showerror(
            "Erro",
            "Por favor, informe o nome do cliente."
        )
        return

    if opcao_lanche.get() == "":
        messagebox.showerror(
            "Erro",
            "Por favor, selecione um lanche."
        )
        return

    lanche = opcao_lanche.get()
    valor = precos[lanche]

    taxa = messagebox.askyesno(
        "Taxa de serviço",
        "Deseja incluir a taxa de serviço de 10%?"
    )

    if taxa:
        valor_final = valor * 1.10
    else:
        valor_final = valor

    resultado.config(
        text=(
            f"Cliente: {nome}\n"
            f"Lanche: {lanche}\n"
            f"Valor do lanche: R$ {valor:.2f}\n"
            f"Valor final: R$ {valor_final:.2f}"
        )
    )

    messagebox.showinfo(
        "Pedido realizado",
        "Pedido realizado com sucesso!"
    )


janela = tk.Tk()
janela.title("Lanchonete Inteligente")
janela.geometry("500x600")
janela.resizable(False, False)


titulo = tk.Label(
    janela,
    text="LANCHONETE INTELIGENTE",
    font=("Arial", 20, "bold")
)
titulo.pack(pady=20)


label_nome = tk.Label(
    janela,
    text="Nome do cliente:",
    font=("Arial", 12)
)
label_nome.pack()


entrada_nome = tk.Entry(
    janela,
    width=40,
    font=("Arial", 12)
)
entrada_nome.pack(pady=10)


precos = {
    "Hambúrguer": 18.00,
    "X-Salada": 22.00,
    "Cachorro-Quente": 15.00,
    "Misto Quente": 12.00,
    "Pizza Individual": 25.00
}


opcao_lanche = tk.StringVar()
opcao_lanche.set("")


label_lanches = tk.Label(
    janela,
    text="Escolha seu lanche:",
    font=("Arial", 13, "bold")
)
label_lanches.pack(pady=10)


for lanche, preco in precos.items():
    radio = tk.Radiobutton(
        janela,
        text=f"{lanche} - R$ {preco:.2f}",
        variable=opcao_lanche,
        value=lanche,
        font=("Arial", 12)
    )
    radio.pack(anchor="w", padx=100)


botao_finalizar = tk.Button(
    janela,
    text="Finalizar Pedido",
    command=finalizar_pedido,
    font=("Arial", 12, "bold"),
    width=20
)
botao_finalizar.pack(pady=25)


resultado = tk.Label(
    janela,
    text="",
    font=("Arial", 12),
    justify="left"
)
resultado.pack(pady=10)


janela.mainloop()