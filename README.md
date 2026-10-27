# ORB ROYALE LIVE V6

Versão completa para GitHub + Render.

## Fluxo
1. Abra o jogo.
2. Toque em ⚙.
3. Digite o ADMIN_PIN configurado no Render.
4. Digite o @usuário que está AO VIVO.
5. Toque em CONECTAR LIVE.
6. Follow, share, presentes e curtidas entram na arena em tempo real.

## Eventos
- Follow -> bolinha Nv.1 + 1 lâmina
- Share -> bolinha + 1 lâmina + escudo; se já existir, +escudo + XP
- Gift -> evolui A MESMA bolinha conforme o valor total em moedas
- Likes -> acumuladas em lotes; a cada 100, drop de XP + recuperação

## Desempenho
O navegador usa Socket.IO com WebSocket primeiro.
O servidor mantém a conexão TikTok separada do jogo.
Curtidas são agrupadas por ~220 ms para evitar dezenas de atualizações por segundo.
A arena já reduz efeitos quando há muitas bolinhas.

## Render
Variáveis:
- ADMIN_PIN: obrigatório
- EULER_API_KEY: opcional, mas recomendado se você tiver uma chave Euler Stream

## Observação
TikTok-Live-Connector é não oficial e o protocolo do TikTok pode mudar.
Presentes/preços exibidos no app são só referência; na LIVE real, o servidor
usa o preço recebido no evento/catálogo da própria sala quando disponível.


## V7 — texto neutro + imagens dos presentes
- O topo usa texto informativo, sem chamada direta para compra:
  "PRESENTE RECEBIDO -> entra ou evolui a bolinha".
- No painel administrativo existe "Imagens dos presentes".
- Escolha um presente, selecione uma foto do celular e salve.
- A imagem é redimensionada para 180x180 e salva localmente no navegador/WebView.
- A foto aparece no catálogo e no aviso de evolução da LIVE.
- Para voltar ao emoji padrão, use "REMOVER IMAGEM".
