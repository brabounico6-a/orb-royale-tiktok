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


## V8 — editor direto da bolinha
Toque em uma bolinha para abrir o cartão.
Depois de desbloquear o PIN no painel, toque em ✏ para editar:
- Nível
- Durabilidade
- Proteção
- Dano
- Espada/arma
- Quantidade de armas orbitais

O visual do cartão continua o mesmo; o editor abre dentro dele.

Também inclui a correção de conexão que desativa a rota enriquecida/premium
de presentes e tenta ler nome/valor diretamente do evento da LIVE.


## V9 — HUD de jogo premium
- Visual completamente redesenhado para transmissão vertical no celular.
- Mantém toda a lógica V8.
- Arena com moldura premium, líder atual, feed de batalha e ranking.
- Interface original inspirada em linguagem visual de jogos, sem copiar nomes das referências.


## V10 ULTRA
- Grande reconstrução visual da arena e HUD.
- Foto de perfil real do TikTok dentro de cada ORB quando disponível.
- Follow, share, gift e chat carregam/atualizam o avatar.
- Ranking também mostra foto de perfil.
- ORB com moldura energética, foto interna, badge de nível e tier.
- Banners grandes de evolução e eliminação.
- Arena com visual mais profundo e transmissão vertical otimizada.
- Avatares ficam apenas em memória durante a sessão; não são gravados pelo servidor.


## V11 — Cyber Battle Gamer Theme
- Tema visual totalmente reconstruído: mais agressivo, neon, HUD angular e arena animada.
- Painéis com cortes gamer, fundo orbital, scanline e núcleo de energia.
- Sons sintetizados de espada/lâmina batendo (sem arquivos externos).
- Sons de impacto, power-up, entrada e KO.
- Colisão entre ORBs com armas gera som metálico de lâminas, não som de bolinha.
- Limitador de frequência evita áudio embolado quando muitas armas acertam ao mesmo tempo.
- No celular, o áudio é liberado após o primeiro toque por regra do navegador.


## V12 — Nordic Cyber Battle
- Tema totalmente refeito em aço escuro, gelo, brasas e runas.
- Trilha ORIGINAL de batalha gerada pelo navegador (tambores, drone grave e metais sintéticos).
- Sem música externa/copyright.
- Música inicia no primeiro toque devido às regras de autoplay do navegador.
- Botão ♫ ON/OFF no topo e controle de volume no painel.
- Novo som metálico forte de espada para contato direto das lâminas.
- Choque entre ORBs armadas também gera clang metálico quando há velocidade relativa suficiente.
- Limite de frequência evita áudio excessivo quando várias armas colidem ao mesmo tempo.


## V13 — Ragnarok Ultra
- Música corrigida: removida a dupla redução de volume.
- Volume padrão da trilha aumentado para 72%.
- Música agora tem master bus com compressor, ficando mais presente sem estourar.
- Trilha enriquecida com tambores de guerra, toms, chains, horns, drone e choir sintético original.
- Tema visual mais profundo: aço, gelo, brasa, runas, pilares, trilhos e HUD de energia da batalha.
- Nova barra "Energia da Batalha" reage a participantes, eliminações e evoluções.
- Estados: CALMO, ATIVO, INTENSO e RAGNAROK.


## V14 — Arena Pro
- Tema refinado para parecer mais um jogo mobile competitivo.
- Cards de participação ficaram muito maiores e mais legíveis.
- SEGUIU / HEART ME OU ROSA / COMPARTILHOU / 100 CURTIDAS agora têm cor e identidade próprias.
- Em modo LIVE os cards continuam visíveis, mas compactados para caber na tela.
- Cada evento real faz o card correspondente piscar por alguns milissegundos.
- Mais contraste no ranking, arena, evento de evolução e HUD.


## V15 — participação mais visível
- SIGA A LIVE / HEART ME / ROSA / COMPARTILHE / 100 CURTIDAS com fonte maior.
- Cores e brilhos próprios para cada card.
- Cards maiores no celular.
- Em modo LIVE ficam em 2 colunas para manter boa leitura.


## V16 — Black Gold Ultra
- Tema inteiro convertido para preto e dourado.
- Cards de participação reconstruídos para o texto nunca ficar escondido/atrás do selo.
- Layout dos cards: ícone + texto + badge em colunas separadas.
- No celular e no Modo LIVE, o badge vai para uma linha separada e o texto fica livre.
- Arena, ranking, HUD, energia, botões, efeitos, eventos e molduras agora usam preto/dourado.
- Tiers e armas também foram convertidos para tons de ouro.


## V17 — Live Mode corrigido + áudios enviados
- Modo LIVE refeito com CSS Grid usando 100dvh.
- Header + instruções + 4 formas de participar ficam no topo.
- A arena recebe TODO o espaço restante e aparece inteira.
- Ranking agora é overlay e não diminui a arena.
- Stats/energia/testes são escondidos apenas no Modo LIVE para liberar espaço.
- Removidos os últimos azuis/roxos do HUD e canvas; tema principal ficou preto+dourado.
- Ícones coloridos dos cards foram trocados por símbolos dourados.
- Música de fundo substituída pelo arquivo enviado: battle-theme.mp3.
- Choque de espada substituído pelo arquivo enviado: sword-clash.mp3.
- O som de espada agora acontece quando as zonas orbitais das armas se cruzam, antes das ORBs encostarem.
- Música é abaixada rapidamente durante o clang para o impacto ficar bem audível.


## V18 — painel do print + espada corrigida
- Área "COMO PARTICIPAR" totalmente redesenhada em painel 2x2.
- Sem badge por cima do texto e sem texto espremido.
- SIGA A LIVE, HEART ME / ROSA, COMPARTILHE e 100 CURTIDAS ficam grandes e legíveis.
- Em Modo LIVE os quatro cards continuam visíveis, compactos e sem cortar a arena.
- Som de espada usa um pool de HTMLAudioElement, mais confiável em Android/WebView.
- Usa exatamente o MP3 enviado pelo usuário.
- Novo botão "TESTAR SOM DE ESPADA" nas configurações.
- Clang dispara no cruzamento da zona orbital das espadas e também na colisão física de ORBs armadas.


## V19 — participação maior para transmissão
- SIGA A LIVE / HEART ME / ROSA / COMPARTILHE / 100 CURTIDAS aumentados.
- Ícones, título e descrição também maiores.
- No Modo LIVE, o cabeçalho foi compactado para liberar altura.
- Os quatro cards aumentaram sem voltar a cortar a arena.


## V20 — compartilhamento justo (5 minutos)
- O **primeiro** compartilhamento de cada espectador conta normalmente, com ORB/escudo/XP.
- Cada espectador só recebe **outro bônus** após 5 minutos desde o último que contou.
- Compartilhamentos adicionais durante a espera não geram benefícios nem novos eventos de recompensa.
- Contagem individual: o tempo de uma pessoa não impede outra de compartilhar.
- O servidor filtra eventos reais (mantém a regra ao reconectar à mesma LIVE enquanto o processo estiver ativo).
- O navegador também filtra testes e evita bônus repetido após atualizar a página no mesmo dispositivo.
- A card COMPARTILHE mostra “A CADA 5 MINUTOS”.
- O resto do tema, sons e física da V19 foram preservados.

## V21 — correção estrutural do áudio de colisões
- Corrigido bug das versões V17–V20: as funções de áudio foram adicionadas fora do escopo do jogo e não acessavam `S` nem os elementos da tela.
- Som de colisão e acerto agora usam `assets/sword-clash.mp3` (arquivo fornecido novamente pelo usuário).
- O mesmo clang é disparado na zona das espadas, no contato físico de ORBs armadas e nos acertos orbitais, respeitando limite de 135 ms para evitar sobreposição excessiva.
- A música de batalha anterior é preservada, com redução momentânea durante o clang.
- Botão **TESTAR SOM DE ESPADA** agora chama o motor dentro do jogo.
- Status de áudio disponível em `window.orbSoundStatus` para diagnóstico técnico.
