

## Conceitos de arquitetura em aplicações para internet

 

1. Tipos de arquitetura
2. Comparativo entre os tipos de arquiteturas
3. Gerenciamento de erros e volume de acesso

### Tipos de arquitetura

1. Monolito: aplicação única
2. Microserviços #1: um serviço para cada aplicação; cada nodo "conversam" entre eles para realizar a requisição;
3. Microserviços #2: parecido com o microserviços #1, porém, todas as requisições de cada nodo é feito pelo Message Broker;
4. Microserviços #3: cada nodo é gerenciado pelo pipeline; 

## Comparando os modelos

### Monolito

|            Prós            |            Contras             |
| :------------------------: | :----------------------------: |
|     Baixa complexidade     |          Stack única           |
| monitoramento simplificado |  Compartilhamento de recursos  |
|                            |          Acoplamento           |
|                            | Mais complexo a escalabilidade |

### Microserviços 1

| Pros                   | Contras                       |
| ---------------------- | ----------------------------- |
| Stack dinâmica         | Acoplamento                   |
| Simples escalabilidade | Monitoramento mais complexo   |
|                        | Provisionamento mais complexo |

### Microserviços #2

| Pros                   | Contra                        |
| ---------------------- | ----------------------------- |
| Stack dinâmica         | Monitoramento mais complexo   |
| Simples escalabilidade | Provisionamento mais complexo |
| Desacoplamento         |                               |

### Microserviços #3

| Prós                   | Contras                                               |
| ---------------------- | ----------------------------------------------------- |
| Stack dinâmica         | Provisionamento mais complexo                         |
| Simples escalabilidade | Plataforma inteira depende do gerenciador de pipeline |
| Desacoplamento         |                                                       |
| Menor complexidade     |                                                       |

