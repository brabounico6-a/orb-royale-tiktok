ORB ROYALE LIVE V2

Pensado para LIVE compartilhando a tela do celular.

Eventos prontos para integração:
window.liveFollow("usuario")
window.liveGift({ user:"usuario", giftName:"Rose", coins:1 })
window.liveLikes(100)

Regras principais:
- Follow: cria bolinha Nv.1 com 1 lâmina de energia.
- Presente: evolui usando o valor em moedas.
- 100 curtidas: XP + recuperação para a arena.
- A mesma pessoa mantém a mesma bolinha durante a sessão.
- Modo LIVE esconde controles de teste para mostrar só arena e instruções.

Observação:
Nomes/preços do catálogo são referência. O TikTok pode variar por região.
Na integração real, use sempre o coin cost recebido no evento ou mostrado no app.


V4 - Compartilhamento:
window.liveShare("usuario")

Regras:
- Follow: cria bolinha Nv.1 + 1 lâmina.
- Compartilhar: cria bolinha Nv.1 + 1 lâmina + 1 escudo.
- Se já estiver na arena, compartilhar dá +1 escudo + XP.


V5 - Equipamentos por presente
- A mesma bolinha persiste para cada usuário.
- Follow/Share cria a bolinha base.
- Presentes evoluem a mesma bolinha.
- Cada presente tem uma arma visual específica.
- Preço maior => mais nível, tamanho, durabilidade, proteção, dano e armas orbitais.
- Proteção reduz dano recebido.
- Toque numa bolinha para ver Nível, Durabilidade, Proteção, Dano e Arma Atual.
