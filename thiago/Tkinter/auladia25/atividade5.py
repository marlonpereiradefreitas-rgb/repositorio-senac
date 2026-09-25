import tkinter as tk


class Cronometro:
    def __init__(self, janela):
        self.janela = janela
        self.segundos = 0
        self.rodando = False

        self.label = tk.Label(
            janela,
            text="00:00",
            font=("Arial", 40)
        )
        self.label.pack(pady=20)

        self.botao_iniciar = tk.Button(
            janela,
            text="Iniciar",
            command=self.iniciar
        )
        self.botao_iniciar.pack(pady=5)

        self.botao_pausar = tk.Button(
            janela,
            text="Pausar",
            command=self.pausar
        )
        self.botao_pausar.pack(pady=5)

        self.botao_zerar = tk.Button(
            janela,
            text="Zerar",
            command=self.zerar
        )
        self.botao_zerar.pack(pady=5)

    def iniciar(self):
        if not self.rodando:
            self.rodando = True
            self.atualizar()

    def pausar(self):
        self.rodando = False

    def zerar(self):
        self.rodando = False
        self.segundos = 0
        self.label.config(text="00:00")

    def atualizar(self):
        if self.rodando:
            minutos = self.segundos // 60
            segundos = self.segundos % 60

            self.label.config(
                text=f"{minutos:02d}: {segundos:02d}"
            )

            self.segundos += 1

            self.janela.after(1000, self.atualizar)

janela = tk.Tk()
janela.title("Cronômetro")
janela.geometry("400x500")

cronometro = Cronometro(janela)

janela.mainloop()