// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TiposDeDados {
    
    // Tipo booleano: armazena verdadeiro ou falso
    bool public isTrue = true;

    // Tipos inteiros: int para inteiros com sinal (podem ser negativos)
    int public signedInt = -42;

    // Tipos inteiros: uint para inteiros sem sinal (apenas positivos)
    uint public unsignedInt = 42;

    // Tipo address: armazena endereços Ethereum
    address public walletAddress = 0x1234567890123456789012345678901234567890;

    // Tipo address payable: pode enviar e receber Ether
    address payable public payableWallet = payable(0x1234567890123456789012345678901234567890);

    // Tipo enum: usado para definir um conjunto de constantes nomeadas
    enum Status { Pending, Active, Completed }
    Status public currentStatus = Status.Pending;

    // Tipo bytes fixo: um array de bytes de tamanho fixo
    bytes32 public fixedBytes = "solidity"; // bytes32 armazena 32 bytes fixos

    // Tipo string: uma sequência de caracteres (na verdade, um array dinâmico de bytes)
    string public contractName = "Contrato de Tipos de Dados";

    // Tipo array de tamanho fixo: um array de inteiros de tamanho 5
    uint[5] public fixedArray = [1, 2, 3, 4, 5];

    // Tipo array dinâmico: um array de inteiros que pode crescer
    uint[] public dynamicArray;

    // Tipo struct: usado para definir tipos de dados personalizados
    struct Person {
        string name;
        uint age;
    }

    // Criando uma instância de uma struct
    Person public person = Person("Alice", 30);

    // Tipo mapping: um tipo de dados que armazena pares chave-valor
    mapping(address => uint) public balances;

    // Tipo de função: pode armazenar uma função e passar como argumento
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    // Exemplo de como adicionar ao array dinâmico
    function addToArray(uint value) public {
        dynamicArray.push(value);
    }

    // Exemplo de como definir e acessar valores de um mapping
    function setBalance(address _addr, uint _balance) public {
        balances[_addr] = _balance;
    }

    // Exemplo de como alterar o status do enum
    function setStatus(Status _status) public {
        currentStatus = _status;
    }

    // Função para enviar Ether ao endereço payable
    function sendEther() public payable {
        require(msg.value > 0, unicode"Você precisa enviar algum Ether.");
        payableWallet.transfer(msg.value);
    }
}
