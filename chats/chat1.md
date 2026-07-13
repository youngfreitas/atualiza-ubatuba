# # Atualiza Ubatuba - Plataforma

_Started 2026-07-13 19:38 UTC_

---

## User

Aja como um UX/UI Designer Sênior especialista em GovTech e acessibilidade digital.

O projeto é o desenvolvimento da plataforma web responsiva "Atualiza Ubatuba", uma iniciativa da Secretaria Municipal de Fazenda para atualização cadastral de contribuintes (proprietários de imóveis, empresas, idosos e pessoas com baixa familiaridade tecnológica).

Objetivo do Design:
Criar uma interface extremamente limpa, intuitiva e amigável que permita ao cidadão atualizar seus dados em menos de 3 minutos, reduzindo a taxa de abandono a quase zero. A interface não pode parecer um "sistema burocrático de governo", mas sim um serviço moderno, ágil e acolhedor.

Diretrizes Visuais e Acessibilidade:

Cores principais: Azul institucional, Verde, Branco (foco em alto contraste).

Tipografia: Fontes sem serifa, grandes e legíveis.

Elementos: Ícones grandes, botões destacados (Call to Action claros), pouco texto explicativo.

Acessibilidade: Preparado para leitores de tela e opção de modo escuro.

Gamificação: Uso de barra de progresso, indicativo de tempo (⏱ 3 minutos) e prova social ("Mais de 5.320 moradores já atualizaram").

Mascote: Inclusão de um personagem institucional acolhedor para guiar o usuário.

Jornada do Usuário (Mobile-First):

Tela Inicial/Boas-vindas: Mensagem de acolhimento, tempo estimado da tarefa e botão de iniciar.

Identificação: Login via GOV.BR ou input de CPF/CNPJ/Inscrição Imobiliária + Validação.

Revisão de Dados Atuais: Exibição dos dados pré-preenchidos (Nome, Endereço, Contatos) em formato de cartões (cards) para facilitar a leitura.

Atualização Rápida: Perguntas objetivas tipo rádio (Sim/Não) para confirmar se os dados mudaram.

Revisão e Confirmação: Resumo visual rápido com checkmarks (✓) nas etapas validadas.

Sucesso: Animação leve (🎉), selo de "Cadastro Atualizado", agradecimento com prova social e botões de download do comprovante.

Entregáveis esperados de você (Claude):

Crie a estrutura visual (wireframe em formato de texto) tela a tela, descrevendo o posicionamento dos elementos (cabeçalho, corpo, botões, rodapé).

Sugira a paleta de cores (códigos HEX) e os tipos de fontes ideais.

Descreva as microinterações (o que acontece quando o usuário clica ou digita).

Forneça sugestões de copies (textos curtos e persuasivos) para os botões e títulos de cada tela.

## Assistant

Ótimo briefing — está bem detalhado. Antes de construir, preciso confirmar alguns pontos de escopo e execução para acertar de primeira.

_[tool: questions_v2]_

## User

Questions answered:
- entregavel: Protótipo interativo navegável (clico e avanço pelas telas de verdade)
- telas: 4. Atualização rápida (Sim/Não), 1. Boas-vindas, 5. Revisão e confirmação, 6. Sucesso, 2. Identificação (GOV.BR / CPF)
- mascote: Vou enviar a imagem em anexo do logo da prefeitura 
- login: Destaque no GOV.BR + opção de CPF/Inscrição como alternativa
- variacoes: Não, uma versão coesa e polida de tudo
- tom: Claro e objetivo (institucional mas humano)

## Assistant

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: list_files]_

_[tool: view_image]_

_[tool: image_metadata]_

Logo é o brasão oficial de Ubatuba — vou usá-lo como identidade institucional no cabeçalho e criar um mascote-guia simples e acolhedor. Montando o protótipo navegável mobile-first.

_[tool: update_todos]_

_[tool: copy_files]_

Sistema visual definido. Construindo o protótipo completo.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

Boas-vindas renderizando bem. Vou corrigir o CSS inválido no badge do mascote e checar as demais telas.

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

Fluxo funcionando — cards, estados ativos, CTA habilitando. Verificando revisão e sucesso.

_[tool: multi_screenshot]_

Todo o fluxo funciona — revisão com checkmarks, sucesso com confete/selo, e o modo escuro fica excelente.

_[tool: update_todos]_

Protótipo navegável completo — as 5 telas, mobile-first, com modo escuro, mascote-guia "Tuba", brasão oficial, barra de progresso, prova social e microinterações. Já está na sua tela; clique **Começar agora** e percorra o fluxo.

_[tool: ready_for_verification]_

Enquanto o revisor confere, segue o **guia de design** que você pediu (tudo já aplicado no protótipo):

**Paleta (HEX)**
- Azul institucional `#0B5FBF` · forte `#0A4C99` · suave `#E6F0FC`
- Verde (CTA/sucesso) `#1E9E5A` · forte `#158048` · suave `#E6F6ED`
- Texto `#0F2440` · secundário `#54677F` · fundo `#EEF4FB` · bordas `#D9E4F1`
- Modo escuro: fundo `#0B1622`, superfície `#132538`, azul `#4C9BEE`, verde `#34C078`

**Tipografia**
- **Nunito** (800/900) para títulos e voz do mascote — arredondada e acolhedora.
- **Public Sans** (400–700) para corpo/inputs — é a fonte oficial do Gov.br, alta legibilidade e acessibilidade.

**Microinterações principais**
- CPF/Inscrição: máscara automática; ✓ verde surge (pop) ao completar 11 dígitos e libera o botão.
- Cards Sim/Corrigir: a borda esquerda muda de cor (verde=confirmado, azul=corrigido) e "Corrigir" revela o campo editável in-line.
- CTA de rodapé permanece cinza/desabilitado até todos os itens serem respondidos, então fica verde com sombra.
- Barra de progresso anima suavemente (azul→verde) a cada etapa.
- Sucesso: check com anel pulsante, confete caindo e selo de protocolo.

**Copies aplicadas**
- Boas-vindas: "Atualize seu cadastro em poucos minutos" / botão **Começar agora →**
- Identificação: "Vamos te identificar" / **Entrar com gov.br** · **Validar e continuar**
- Dados: "Confira seus dados" / **✓ Está certo** · **✎ Corrigir**
- Revisão: "Quase lá! Confirme o resumo" / **Enviar atualização ✓**
- Sucesso: "Cadastro atualizado!" + selo e **Baixar comprovante**

No painel de **Tweaks** você pode ajustar prova social, minutos, nome do mascote e a cor de destaque. Quer que eu explore variações da tela de Boas-vindas ou de Sucesso, ou adicione a etapa separada de "Revisão dos dados atuais"?

