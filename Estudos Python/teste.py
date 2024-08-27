on = True

def adicao(n1, n2):
    return n1 + n2

def subtracao(n1, n2):
    return n1 - n2

def multiplicacao(n1, n2):
    return n1 * n2

def divisao(n1, n2):
    try:
        return n1 / n2
    except ZeroDivisionError:
        return "Não é possível dividir por zero!\n"

while on:
    print("Calculadora")
    print("1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair\n")

    try:
        escolha = int(input("Digite o número da operação que deseja realizar: "))
    except ValueError:
        print("Entrada inválida! Por favor, digite um número válido!\n")
        continue
    
    match escolha:
        case 1:
            try:
                print("\nOperação de Adição")
                n1 = int(input("Digite o primeiro número: "))
                n2 = int(input("Digite o segundo número: "))
            
                resultado = adicao(n1, n2)
                print(f"O resultado da operaçao é: {resultado:.2f}\n")
            except ValueError:
                print("Entrada inválida! Por favor, digite números inteiros!\n")
        case 2:
            try:
                print("\nOperação de Subtração")
                n1 = int(input("Digite o primeiro número: "))
                n2 = int(input("Digite o segundo número: "))
            
                resultado = subtracao(n1, n2)
                print(f"O resultado da operaçao é: {resultado:.2f}\n")
            except ValueError:
                print("Entrada inválida! Por favor, digite números inteiros!\n")
        case 3:
            try:
                print("\nOperação de Multiplicação")
                n1 = int(input("Digite o primeiro número: "))
                n2 = int(input("Digite o segundo número: "))
            
                resultado = multiplicacao(n1, n2)
                print(f"O resultado da operaçao é: {resultado:.2f}\n")
            except ValueError:
                print("Entrada inválida! Por favor, digite números inteiros!\n")
        case 4:
            try:
                print("\nOperação de Divisão")
                n1 = int(input("Digite o primeiro número: "))
                n2 = int(input("Digite o segundo número: "))

                resultado = divisao(n1, n2)
                if isinstance(resultado, str):
                    print(resultado)
                else:
                    print(f"O resultado da operaçao é: {resultado:.}\n")
            except ValueError:
                print("Entrada inválida! Por favor, digite números inteiros!\n")
        case 5:
            print("Encerrando o programa!")
            break
        case _:
            print("Valor inválido, tente novamente!\n")
